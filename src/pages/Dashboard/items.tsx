import { Link } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Separator } from "@/components/ui/separator"

const profileFormSchema = z.object({
  itemname: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  price: z
    .number()
   ,
  desc: z.string().max(160).min(4),
  image: 
     z.string()//.url({ message: "Please enter a valid URL." })
   .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  itemname: "John Doe",
  desc: "I own a computer.",
  price:1000,
}

export function Items() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })



  function onSubmit(data: ProfileFormValues) {
    fetch("http://127.0.0.1:8000/api/categories", {
      method: "POST",
      body: JSON.stringify({ 
        name: data.itemname,
        price: data.price,
        description: data.desc,
        category_id: 1,
       }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
      })
      .catch((error) => {
        // Handle the error
      })
  }

  return (
    
    <div className="space-y-6">
              
      <div>
        <h3 className="text-lg font-medium">اضافة طبق جديد</h3>
        <p className="text-sm text-muted-foreground">
          يمكنك اضافة الاطباق الجديدة هنا
        </p>
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="itemname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>اسم الطبق</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
       <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel> صورة الطبق</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>تفاصيل الطبق</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
             <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>سعر الطبق</FormLabel>
                <FormControl>
                  <Input
                    placeholder="سعر الطبق"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">اضافة طبق </Button>
        </form>
      </Form>
    </div>
  )
}

