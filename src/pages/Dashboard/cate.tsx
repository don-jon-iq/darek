import { Link } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button";
import { DropdownMenu,  DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {  MoreHorizontal } from "lucide-react";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area";

const CateSchema = z.object({
  name: z
    .string()
    .nonempty("الرجاء ادخال اسم القائمة")
 
})

type CateValues = z.infer<typeof CateSchema>

// This can come from your database or API.

export function Cate() {
  const form = useForm<CateValues>({
    resolver: zodResolver(CateSchema),
    mode: "onChange",
  })

  

  function onSubmit(data: CateValues) {
    fetch("http://127.0.0.1:8000/api/categories", {
      method: "POST",
      body: JSON.stringify({ name: data.name }),
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
    <>
     <div className="flex-1 lg:max-w-xl">
    <div className="space-y-10">
              
      <div>
        <h3 className="text-lg font-medium">قائمة الاطباق</h3>
        <p className="text-sm text-muted-foreground">
          ستضهر قائمة الاطباق هنا في القائمة السريعة
        </p>
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>اسم القائمة</FormLabel>
                <FormControl>
                  <Input placeholder="الاسم" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
         
          <Button type="submit">اضافة القائمة</Button>
        </form>
      </Form>
      </div>
      </div>
      <div className="hidden lg:block lg:w-fit h-3/6 overflow-hidden">
        <ItemMenu />
      </div>
      </>
  )
}



function ItemMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Products</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
        <ScrollArea>
          <TableHeader>
            <TableRow>
              <TableHead>اسم القائمة</TableHead>
              <TableHead>
                <span className="sr-only">عمليات</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category?) => (
              <TableRow key={category?.id }>
                <TableCell className="font-medium">{category.name}</TableCell>
               
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        aria-haspopup="true"
                        size="icon"
                        variant="ghost"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          </ScrollArea>
        </Table>
      </CardContent>
    </Card>
  );
}