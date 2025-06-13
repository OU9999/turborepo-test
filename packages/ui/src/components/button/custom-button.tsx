import { cn } from '@workspace/ui/lib/utils';
import { Button, ButtonProps } from '../base/button';

interface CustomButtonProps extends ButtonProps {}

const CustomButton = ({ className, ...props }: CustomButtonProps) => {
  return (
    <Button
      aria-label="test"
      className={cn('bg-test text-test2', className)}
      {...props}
    />
  );
};

export { CustomButton };
