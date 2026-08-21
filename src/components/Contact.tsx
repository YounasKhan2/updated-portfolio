import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';

const inputCls =
  'w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-white placeholder:text-fog/50 transition focus:border-accent focus:outline-none';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  const set = (key: string, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: '' }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = 'Please tell me your name.';
    if (!form.email.trim()) next.email = 'An email is required so I can reply.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = 'That email looks off — double-check it.';
    if (form.message.trim().length < 10) next.message = 'Give me a little more detail (10+ characters).';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    setServerError('');
    try {
      const response = await fetch('https://formsubmit.co/ajax/younaskk120@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.subject?.trim()
            ? `[Portfolio] ${form.subject}`
            : `New Message from ${form.name} (Portfolio)`,
          message: form.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Unable to deliver message right now. Please email directly.');
      }
    } catch (err) {
      setStatus('error');
      setServerError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or reach out directly at younaskk120@gmail.com.'
      );
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-28">
      <div className="pointer-events-none absolute bottom-[-30%] right-[-10%] h-[500px] w-[500px] rounded-full bg-accent/8 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading index="05" title="Let's work together" sub="got a project? let's talk" />

        <div className="grid gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Have an idea? Let's turn it into a{' '}
              <span className="text-accent">product people love.</span>
            </h3>
            <p className="mt-6 max-w-md leading-relaxed text-fog">
              Whether it's a full web platform, a Flutter app, or an MVP you need shipped fast —
              drop me a message. I usually reply within 24 hours.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="mailto:younaskk120@gmail.com"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-panel text-accent transition group-hover:border-accent">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-fog">
                    email
                  </span>
                  <span className="text-white transition group-hover:text-accent">
                    younaskk120@gmail.com
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-panel text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-fog">
                    location
                  </span>
                  <span className="text-white">Pakistan — available remotely worldwide</span>
                </span>
              </div>
            </div>

            <div className="mt-10 flex gap-3">
              {[
                { icon: Github, href: 'https://github.com/YounasKhan2', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/muhammadyounas', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:younaskk120@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-line text-fog transition hover:border-accent hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-line bg-panel p-7 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-widest text-fog">
                  Name *
                </label>
                <input
                  id="name"
                  className={inputCls}
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-widest text-fog">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  className={inputCls}
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block font-mono text-xs uppercase tracking-widest text-fog">
                Subject
              </label>
              <input
                id="subject"
                className={inputCls}
                placeholder="Project inquiry, freelance gig, full-time role..."
                value={form.subject}
                onChange={(e) => set('subject', e.target.value)}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-widest text-fog">
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                className={`${inputCls} resize-none`}
                placeholder="Tell me about your project, timeline and budget..."
                value={form.message}
                onChange={(e) => set('message', e.target.value)}
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
            </div>

            {status === 'sent' && (
              <div className="mt-5 flex items-center gap-2.5 rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                Message sent! I'll get back to you within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div className="mt-5 rounded-lg border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                {serverError}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-ink transition hover:shadow-[0_0_40px_rgba(201,245,66,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
