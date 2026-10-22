'use client';

import * as React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { contactSchema, type ContactFormData } from '@/lib/validators';
import { Field } from '@/components/ui/Field';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    mode: 'onBlur',
  });

  const messageValue = useWatch({ control, name: 'message' }) || '';

  const onSubmit = async (data: ContactFormData) => {
    // Simulate realistic network delay for demo
    await new Promise((resolve) => setTimeout(resolve, 600));

    toast.success('Message sent (demo)!', {
      description: `Thanks ${data.name}! We'll reply to ${data.email} within 4 hours.`,
    });

    setIsSuccess(true);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6"
    >
      {isSuccess && (
        <div className="bg-mint border-3 border-ink p-4 shadow-brutal-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-ink shrink-0 mt-0.5" strokeWidth={2.5} />
          <div>
            <p className="font-bold text-sm text-ink">Transmission dispatched!</p>
            <p className="font-mono text-xs text-ink/80 mt-0.5">
              Your message was received in demo mode. Feel free to submit another inquiry.
            </p>
          </div>
        </div>
      )}

      {/* Name Field */}
      <Field
        id="name"
        label="Your Name"
        required
        error={errors.name?.message}
      >
        <Input
          id="name"
          placeholder="e.g. Satoshi Nakamoto"
          error={!!errors.name}
          {...register('name')}
        />
      </Field>

      {/* Email Field */}
      <Field
        id="email"
        label="Email Address"
        required
        hint="We'll never share or spam your address."
        error={errors.email?.message}
      >
        <Input
          id="email"
          type="email"
          placeholder="maker@domain.com"
          error={!!errors.email}
          {...register('email')}
        />
      </Field>

      {/* Subject Field */}
      <Field
        id="subject"
        label="Subject / Topic"
        required
        error={errors.subject?.message}
      >
        <Input
          id="subject"
          placeholder="e.g. Commercial license inquiry or kit submission"
          error={!!errors.subject}
          {...register('subject')}
        />
      </Field>

      {/* Message Field */}
      <Field
        id="message"
        label="Message"
        required
        counter={`${messageValue.length} / 2000`}
        error={errors.message?.message}
      >
        <Textarea
          id="message"
          rows={6}
          placeholder="What would you like to build, ask, or report? Include any relevant kit links..."
          error={!!errors.message}
          {...register('message')}
        />
      </Field>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          className="w-full sm:w-auto"
        >
          <Send className="w-4 h-4" strokeWidth={2.5} />
          Send Transmission (Demo)
        </Button>
      </div>
    </form>
  );
}
