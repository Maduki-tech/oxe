import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { SidebarMenuButton } from "../ui/sidebar";
import { ModeToggle } from "../theme-toggle";

export default function Settings({
  item,
}: {
  item: {
    title: string;
    url: string;
    icon: LucideIcon;
    badge?: React.ReactNode;
  };
}) {
  return (
    <Dialog>
      <form>
        <SidebarMenuButton asChild>
          <DialogTrigger asChild>
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </DialogTrigger>
        </SidebarMenuButton>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="theme">Theme</Label>
              <ModeToggle />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
