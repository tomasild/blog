"use client"

import type React from "react"

import { useState } from "react"
import type { Metadata } from "next"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us for any questions, feedback, or inquiries.",
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSelectChange = (value: string) => {
    setFormState(prev => ({ ...prev, subject: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-in" className="text-center max-w-[800px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions or feedback? We'd love to hear from you. Get in touch with our team.
            </p>
          </ScrollAnimation>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollAnimation animation="slide-in-left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Our Location</h3>
                      <p className="text-muted-foreground">
                        123 Blog Street, Content City, 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-muted-foreground">
                        info@modernblog.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-muted-foreground">
                        (123) 456-7890
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Office Hours</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-in-right">
              <div className="bg-card p-8 rounded-lg shadow-sm">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select value={formState.subject} onValueChange={handleSelectChange}>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Find Us</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">\

