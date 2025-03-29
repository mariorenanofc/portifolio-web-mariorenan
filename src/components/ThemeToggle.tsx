
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="rounded-full"
      onClick={toggleTheme}
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-slate-700" />
      )}
    </Button>
  );
}
