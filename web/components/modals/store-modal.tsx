"use client";

import * as z from "zod";
import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage,  } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    name: z.string().min(1).max(255),
});

export const StoreModal = () => {
    const storeModal = useStoreModal(); 


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        console.log(data);
        // Todo create store
    }

    return (
        <Modal
            title="Create a store"
            discription="Add a new store to manage your products and categories "
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}>
                <div>

                     <div className="space-y-4 py-2 pb-4">
                        <Form {...form} >
                            <form onSubmit={form.handleSubmit(onSubmit)} >
                                 <FormField 
                                    control={form.control}
                                    name="name"
                                    render = {({field})=>(
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="E-commerce" />
                                            </FormControl>
                                            <FormMessage/> 
                                        </FormItem>
                                    )}
                                 />
                                 <div className="pt-6 space-x-2 flex items-center justify-end " >
                                    <Button variant= "outline" onClick={storeModal.onClose} > Cancel</Button>
                                    <Button type="submit"> Continue</Button>

                                 </div>
                            </form>
                        </Form>
                     </div>
                </div>

        </Modal>
    ) 
}