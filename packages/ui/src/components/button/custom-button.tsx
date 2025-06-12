import { Button, ButtonProps } from '@workspace/ui/components/base/button';
import { cn } from '@workspace/ui/lib/utils';

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
