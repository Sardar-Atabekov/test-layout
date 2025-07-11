import * as React from "react";
import { cn } from "./../../libs/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
