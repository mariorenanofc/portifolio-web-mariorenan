import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { generateWhatsAppLink } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/hooks/useLanguage';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Gere o link do WhatsApp para a seção de contato
  const contactWhatsappLink = generateWhatsAppLink(
    '5587999061405',
    '*Olá Mário!* 👋 Vi seu contato no portfólio e gostaria de conversar.' // Mensagem específica para esta seção
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: t('contact.form.success.title'),
        description: t('contact.form.success.description'),
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: t('contact.form.error.title'),
        description: t('contact.form.error.description'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background">{/* Corrigido para usar tema */}
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">{t('contact.subtitle')}</h3>
            <p className="text-muted-foreground mb-8">
              {t('contact.description')}
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="p-3 bg-secondary text-primary rounded-lg mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <a
                    href="mailto:MARIOVENDASONLINE10K@GMAIL.COM"
                    className="text-primary text-xs hover:underline"
                  >
                    MARIOVENDASONLINE10K@GMAIL.COM
                  </a>
                </div>
              </div>

              {/* Telefone/WhatsApp */}
              <div className="flex items-start">
                <div className="p-3 bg-secondary text-primary rounded-lg mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">WhatsApp</h4> {/* Pode mudar o título se quiser */}
                  {/* 3. Atualize o link do telefone */}
                  <a
                    href={contactWhatsappLink} // Use a variável gerada
                    target="_blank"
                    rel="noopener noreferrer" // Adicione rel
                    className="text-primary hover:underline"
                    aria-label="Abrir conversa no WhatsApp" // Melhora a acessibilidade
                  >
                    (87) 99906-1405
                  </a>
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-start">
                <div className="p-3 bg-secondary text-primary rounded-lg mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Localização</h4>
                  <p className="text-muted-foreground">Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="glass-card rounded-lg p-6 shadow-md animate-slide-up" style={{ animationDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campos do formulário ... */}
               <div>
                <label htmlFor="name" className="block text-foreground mb-1">{t('contact.form.name')}</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.name.placeholder')}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground mb-1">{t('contact.form.email')}</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.email.placeholder')}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-foreground mb-1">{t('contact.form.subject')}</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.subject.placeholder')}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground mb-1">{t('contact.form.message')}</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.message.placeholder')}
                  className="w-full min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center"> {/* Adicionado justify-center */}
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contact.form.sending')}
                  </span>
                ) : (
                  <span className="flex items-center justify-center"> {/* Adicionado justify-center */}
                    <Send className="mr-2" size={18} />
                    {t('contact.form.send')}
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
