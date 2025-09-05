"use client";
import { Button, ButtonProps, Calendar, CalendarProps } from "@heroui/react";

export const MyButton = (props: ButtonProps) => {
  return (
    <Button
      radius="full"
      className="font-bold border border-t border-white shadow-md"
      {...props}
    />
  );
};

//custom cuon lich
//className
//HeroUI - fully customize
//Customize từng element để tạo ra output đúng
export const MyCalendar = (props: CalendarProps) => {
  return (
    <Calendar
      classNames={{
        nextButton: "text-red-500",
        header: "bg-teal-500",
        title: "text-green-500",
      }}
      {...props}
    />
  );
};
