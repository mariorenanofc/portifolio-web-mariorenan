import { useState } from "react";
import { ExternalLink, Download, Calendar, Award, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/hooks/useLanguage";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  driveId: string;
  type: string;
  skills?: string[];
  description?: string;
}

const Certifications = () => {
  const { t } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  // Sample certificates data - you can replace with your actual certificates
  const certificates: Certificate[] = [
    {
      id: "1",
      title: "Carreira, Negócios e Produtividade",
      issuer: "Full Stack Club",
      date: "2025",
      driveId: "1rYvTFpYNGaIpJgaW-Kws45AZg4bnVFoY",
      type: "Mentoria",
      skills: ["Negócios", "Produtividade"],
      description:
        "Mentoria com Christian Barbosa, onde foi compartilhado sua trajetória na programação e empreendedorismo, destacando a importância de projetos pessoais, qualidade do código e vontade de aprender para programadores iniciante se destacar na sua jornada inicial.",
    },
    {
      id: "2",
      title: "Desenvolvimento Profissonal",
      issuer: "Fundação Bradesco",
      date: "2023",
      driveId: "1br_bOdhpNXff3QfymDY9YX_5XtMNaOp0", // Replace with actual file ID
      type: "Negócios",
      skills: ["Comunicação", "Liderança", "Trabalho em Equipe"],
      description:
        "Curso focado em habilidades interpessoais e profissionais para o ambiente de trabalho.",
    },
    {
      id: "3",
      title: "Introdução ao JavaScript",
      issuer: "Fundação Bradesco",
      date: "2023",
      driveId: "1xCICD0WD16e3JOPU5oIBPvn10Gt5gxk4", // Replace with actual file ID
      type: "Frontend",
      skills: ["JavaScript", "DOM", "Eventos"],
      description:
        "Curso introdutório ao JavaScript, cobrindo conceitos básicos e manipulação do DOM.",
    },
  ];

  const getGoogleDrivePreviewUrl = (driveId: string) => {
    return `https://drive.google.com/file/d/${driveId}/view`;
  };

  const getGoogleDriveDownloadUrl = (driveId: string) => {
    return `https://drive.google.com/uc?export=download&id=${driveId}`;
  };

  const getGoogleDriveViewUrl = (driveId: string) => {
    return `https://drive.google.com/file/d/${driveId}/view`;
  };

  const typeColors: Record<string, string> = {
    Frontend: "bg-primary/10 text-primary border-primary/20",
    Backend: "bg-cyber/10 text-cyber border-cyber/20",
    Mentoria: "bg-cyber/10 text-cyber border-cyber/20",
    Cloud: "bg-gold/10 text-gold border-gold/20",
    Negócios: "bg-gold/10 text-gold border-gold/20",
    Fullstack: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  };

  return (
    <section
      id="certifications"
      className="py-20 md:py-24 lg:py-32 relative overflow-hidden floating-orbs"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t("certifications.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("certifications.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <Card
              key={certificate.id}
              className="glass-card hover:scale-105 transition-all duration-500 cursor-pointer animate-slide-up-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCertificate(certificate)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <Badge
                      variant="secondary"
                      className={`mb-3 ${
                        typeColors[certificate.type] || "bg-muted"
                      }`}
                    >
                      {certificate.type}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {certificate.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {certificate.issuer}
                    </p>
                  </div>
                  <Award className="h-8 w-8 text-primary opacity-60" />
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{certificate.date}</span>
                </div>

                {certificate.skills && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {certificate.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="tech-tag text-xs">
                        {skill}
                      </span>
                    ))}
                    {certificate.skills.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{certificate.skills.length - 3}{" "}
                        {t("certifications.more")}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex gap-2 mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        getGoogleDriveViewUrl(certificate.driveId),
                        "_blank"
                      );
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t("certifications.view")}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        getGoogleDriveDownloadUrl(certificate.driveId),
                        "_blank"
                      );
                    }}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certificate Preview Modal */}
        <Dialog
          open={!!selectedCertificate}
          onOpenChange={() => setSelectedCertificate(null)}
        >
          <DialogContent className="max-w-4xl max-h-full p-0 overflow-auto">
            <DialogHeader className="p-6 pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <DialogTitle className="text-2xl font-bold mb-2 ">
                    {selectedCertificate?.title}
                  </DialogTitle>
                  <p className="text-muted-foreground">
                    {selectedCertificate?.issuer} • {selectedCertificate?.date}
                  </p>
                </div>
                
              </div>
            </DialogHeader>

            <div className="px-6 pb-6">
              {selectedCertificate?.description && (
                <p className="text-muted-foreground mb-4">
                  {selectedCertificate.description}
                </p>
              )}

              {selectedCertificate?.skills && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCertificate.skills.map((skill) => (
                    <span key={skill} className="tech-tag text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <div
                className="relative bg-muted rounded-lg overflow-hidden"
                style={{ height: "500px" }}
              >
                <iframe
                  src={getGoogleDrivePreviewUrl(
                    selectedCertificate?.driveId || ""
                  )}
                  className="w-full h-full border-0"
                  title={`${selectedCertificate?.title} Certificate Preview`}
                  allow="autoplay"
                />
              </div>

              <div className="flex gap-4 mt-6">
                <Button
                  onClick={() =>
                    window.open(
                      getGoogleDriveViewUrl(selectedCertificate?.driveId || ""),
                      "_blank"
                    )
                  }
                  className="flex-1"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {t("certifications.openInDrive")}
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      getGoogleDriveDownloadUrl(
                        selectedCertificate?.driveId || ""
                      ),
                      "_blank"
                    )
                  }
                >
                  <Download className="h-4 w-4 mr-2" />
                  {t("certifications.download")}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certifications;
