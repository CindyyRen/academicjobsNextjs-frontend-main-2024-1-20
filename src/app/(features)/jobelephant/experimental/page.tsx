'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { jobElephantContacts } from '@/data/jobElephantContacts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const newContact = true;

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <main className="content-grid">
      <h2 className="underline-full mt-4 mb-8">Job Elephant Post Form</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-[500px]"
        >
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="job-elephant-contact">Name (Job Elephant)</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Job Elephant Contact" />
              </SelectTrigger>
              <SelectContent>
                {jobElephantContacts.map((contact, index) => (
                  <SelectItem key={index} value={contact}>
                    {contact}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {newContact ? (
            <div className="p-4 border border-sky-200 bg-sky-50">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="job_elephant_first_name">First Name</Label>
                <Input
                  type="text"
                  id="job_elephant_first_name"
                  placeholder="Job Elephant Client Name"
                  className="bg-white"
                />
              </div>
              <div className="grid w-full items-center gap-1.5 mt-4">
                <Label htmlFor="job_elephant_last_name">Last Name</Label>
                <Input
                  type="text"
                  id="job_elephant_last_name"
                  placeholder="Job Elephant Client Name"
                  className="bg-white"
                />
              </div>
              <div className="grid w-full items-center gap-1.5 mt-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  className="bg-white"
                  placeholder="Email"
                />
              </div>
            </div>
          ) : null}

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="job_elephant_client_name">
              Job Elephant Client (ie: Utah University)
            </Label>
            <Input
              type="text"
              id="job_elephant_client_name"
              placeholder="Job Elephant Client Name"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="job_link_url">
              Job Link URL (ie: apptrkr.com/…)
            </Label>
            <Input type="text" id="job_link_url" placeholder="Job Link URL" />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="message">Notes or Special Instructions</Label>
            <Textarea id="message" placeholder="Type your message here." />
          </div>

          {/* <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="job_post_document">Job Post Document</Label>
            <Input id="job_post_document" type="file" />
          </div> */}

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
}
