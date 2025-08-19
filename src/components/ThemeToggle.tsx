
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { useLanguage } from '@/hooks/useLanguage';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeToggle();
  const { t } = useLanguage();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="rounded-full transition-colors"
      onClick={toggleTheme}
      aria-label={t('theme.toggle')}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-primary transition-all duration-300 hover:rotate-180" />
      ) : (
        <Moon className="h-5 w-5 text-muted-foreground transition-all duration-300 hover:rotate-12" />
      )}
    </Button>
  );
}
