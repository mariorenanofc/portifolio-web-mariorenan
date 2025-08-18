import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { generateWhatsAppLink } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
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
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve.",
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
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro. Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Vamos conversar!</h3>
            <p className="text-gray-600 mb-8">
              Estou sempre aberto a novas oportunidades e desafios. Sinta-se à vontade para entrar em contato comigo por qualquer um dos meios abaixo ou através do formulário.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="p-3 bg-secondary text-primary rounded-lg mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
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
                  <h4 className="font-medium text-gray-800">WhatsApp</h4> {/* Pode mudar o título se quiser */}
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
                  <h4 className="font-medium text-gray-800">Localização</h4>
                  <p className="text-gray-600">Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-secondary rounded-lg p-6 shadow-md animate-slide-up" style={{ animationDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campos do formulário ... */}
               <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Nome</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu.email@exemplo.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-1">Assunto</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Assunto da mensagem"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Mensagem</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Sua mensagem..."
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
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center"> {/* Adicionado justify-center */}
                    <Send className="mr-2" size={18} />
                    Enviar mensagem
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
