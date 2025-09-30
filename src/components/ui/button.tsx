'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] gap-2',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        ghost: 'hover:bg-gray-100 hover:text-gray-900',
        link: 'text-blue-600 underline-offset-4 hover:underline',
        gradient: 'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white hover:shadow-2xl hover:scale-105 border-0',
      },
      size: {
        default: 'h-11 px-4 py-2 text-sm sm:h-12 sm:px-6 sm:py-3 sm:text-base',
        sm: 'h-8 px-3 py-1.5 text-xs sm:h-9 sm:px-4 sm:py-2',
        lg: 'h-12 px-6 py-3 text-sm sm:h-14 sm:px-8 sm:py-4 sm:text-base',
        xl: 'h-14 px-8 py-4 text-base sm:h-16 sm:px-10 sm:py-5 sm:text-lg',
        icon: 'h-9 w-9 sm:h-10 sm:w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };