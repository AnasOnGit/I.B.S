"use client";
import React, { ReactElement, use, useEffect, useState } from "react";
import Xarrow, { Xwrapper } from "react-xarrows";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Props { }

function Dashboard({ }: Props): ReactElement {
  const [states, setStates] = useState([
    {
      title: "حجاج الداخل",
      percentage: 3,
    },
    {
      title: "نقاط التجمع",
      percentage: 0,
    },
    {
      title: "المسجد الحرام",
      percentage: 20,
    },
    {
      title: "محطة الجمرات",
      percentage: 1,
    },
    {
      title: "مخيمات منى",
      percentage: 2,
    },
    {
      title: "مشعر عرفات",
      percentage: 74,
    },
    {
      title: "مشعر مزدلفة",
      percentage: 0,
    },
  ]);

  const topNodes = [
    { id: "JMR", label: "جمر الجمرات", distance: 800 },
    { id: "HRM", label: "المسجد الحرام", distance: 11650 },
    { id: "ASM", label: "نقاط التجمع", distance: 0 },
    { id: "INT", label: "حجاج الداخل", distance: 1875 },
  ];

  const bottomNodes = [
    { id: "MIN", label: "مخيمات منى", distance: 1000 },
    { id: "ARF", label: "مشعر عرفات", distance: 43434 },
    { id: "MUZ", label: "مشعر مزدلفة", distance: 0 },
  ];

  const nodesConnections = [
    { from: "JMR", to: "HRM" },
    { from: "JMR", to: "MIN" },
    { from: "MIN", to: "JMR" },
    { from: "HRM", to: "MIN" },
    { from: "MIN", to: "ARF" },
    { from: "ARF", to: "MUZ" },
    { from: "MUZ", to: "MIN" },
    { from: "INT", to: "ASM" },
  ];

  return (
    <section className="flex flex-row justify-between  gap-2 min-h-screen">
      {/* left section */}
      <div className="flex flex-row bg-[#26303d] justify-evenly items-center flex-1">
        <div className="flex flex-col  h-[80%] justify-evenly items-center relative">
          <Station
            distance={800}
            code="JMR"
            title="جمر الجمرات"
            connections={["HRM", "MIN"]}
            connectionId="JMR"
          >
            <>
            {/* one arrow pointing from  left side to right side from center orign */}
          <div className="absolute  -top-[0px] -right-1/2 transform -translate-x-[0px] translate-y-[0px] flex flex-col items-center text-[#445564] font-bold">
            <p>0</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              fill="currentColor"
              className="bi bi-arrow-right text-[#445564]"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
            {/* two arrow pointing between both stations svg with posintion absotue */}
            <div className="absolute -bottom-8 left-10 flex justify-center items-center pointer-events-none">
            <div className="flex flex-row justify-center items-center text-xs text-[#445564] font-bold">
              <p>0</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-[#445564] font-bold bi bi-arrow-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            </div>
            <div className="flex flex-row justify-center items-center text-xs text-[#445564] font-bold">
              <p>0</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-[#445564] font-bold bi bi-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                />
              </svg>
            </div>
          </div>
          </>

          </Station>

          

        

          <Station
            code="MIN"
            title="مخيمات منى"
            distance={1000}
            connections={["ARF", "JMR", "HRM"]}
            connectionId="MIN"
          >
            <>
            {/* arrow */}
            <div className="absolute top-[0px] left-[130px]  flex justify-center items-center text-[#445564]  flex-col font-bold ">
            {/* one arrow pointing from  left side to right side from center orign */}
            <p>0</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              fill="currentColor"
              className="bi bi-arrow-right text-[#445564]"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
          {/* down arrow */}
          <div className="absolute top-[130px] left-[50px] flex flex-col items-center justify-center text-[#445564] font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="376"
              height="56"
              viewBox="0 0 2091 107"
              fill="none"
            >
              <path
                d="M44.3891 1.61091C42.2412 -0.536971 38.7588 -0.536971 36.6109 1.61091L1.60913 36.6127C-0.538757 38.7606 -0.538757 42.243 1.60913 44.3909C3.75701 46.5388 7.23942 46.5388 9.3873 44.3909L40.5 13.2782L71.6127 44.3909C73.7606 46.5388 77.243 46.5388 79.3909 44.3909C81.5388 42.243 81.5388 38.7606 79.3909 36.6127L44.3891 1.61091ZM2069.75 63.0152L2073.84 66.6985L2073.84 66.6985L2069.75 63.0152ZM1040 95.5L511 95.5V106.5L1040 106.5V95.5ZM511 95.5L257.5 95.5V106.5L511 106.5V95.5ZM257.5 95.5L116.5 95.5V106.5L257.5 106.5V95.5ZM46 25V5.5H35V25H46ZM1558 95.5L1040 95.5V106.5L1558 106.5V95.5ZM1819 95.5L1558 95.5V106.5L1819 106.5V95.5ZM2081.92 41.3167L2065.67 59.3318L2073.84 66.6985L2090.08 48.6833L2081.92 41.3167ZM1984.35 95.5L1819 95.5V106.5L1984.35 106.5V95.5ZM2065.67 59.3318C2044.91 82.3566 2015.36 95.5 1984.35 95.5V106.5C2018.47 106.5 2050.99 92.0363 2073.84 66.6985L2065.67 59.3318ZM116.5 95.5C77.5639 95.5 46 63.9361 46 25H35C35 70.0112 71.4888 106.5 116.5 106.5V95.5Z"
                fill="#445564"
              />
            </svg>
            <span>0</span>
          </div>
          </>
            </Station>
          

        </div>
        <div className=" relative flex flex-col  h-[80%] justify-evenly items-center">
          <Station
            distance={11650}
            code="HRM"
            title="المسجد الحرام"
            connections={["MIN", "JMR"]}
            connectionId="HRM"
          >
            {/* arrow pointing on top diagionally */}
          <div className="flex flex-col absolute top-[90px] left-[-80px]  items-center text-[#445564] font-bold justify-center   -rotate-45">
            <span>0</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              fill="currentColor"
              className="bi bi-arrow-left text-[#445564]"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 1 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </div>
            </Station>

          <Station
            code="ARF"
            title="مشعر عرفات"
            distance={43434}
            connections={["MIN", "MUZ"]}
            connectionId="ARF"
          >
{/* arrow right */}
<div className="absolute top-[0px] left-[130px]   flex justify-center items-center flex-col font-bold text-[#445564]">
            <p>0</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              fill="currentColor"
              className="bi bi-arrow-right text-[#445564]"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
            </Station>

        
        </div>
        <div className="flex flex-col  h-[80%] justify-evenly items-center">
          <Station
            code="ASM"
            title="نقاط التجمع"
            distance={0}
            connections={["INT"]}
            connectionId="ASM"
          />
          <Station
            code="MUZ"
            title="مشعر مزدلفة"
            distance={0}
            connections={["ARF", "MIN"]}
            connectionId="MUZ"
          />
        </div>
        <div className="flex flex-col  h-[80%] justify-evenly items-center ">
          <Station
            code="INT"
            title="حجاج الداخل"
            distance={1875}
            connections={["ASM"]}
            connectionId="INT"
          >
            <div className="absolute -top-0 -left-[60px]  text-[#445564] flex flex-col items-center font-bold ">
            <p>--</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              fill="currentColor"
              className="bi bi-arrow-left text-[#445564]"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </div>
            </Station>
          <div className="h-[136px] w-[120px]"></div>
          
          {/* <div></div> */}
        </div>
      </div>

      {/* right section */}
      <div className="bg-[#26303d] w-[25%] min-h-[80%] p-3 flex items-center flex-col">
        {/* date */}
        <div className="flex flex-row-reverse justify-evenly items-center mt-12">
          <p className="text-white text-5xl font-bold">11</p>
          <div className="flex flex-col justify-between gap-3 items-center">
            <p className="text-white text-3xl ">ذي الحجة</p>
            <p className="text-white text-xl">07:38 - 07:33</p>
          </div>
        </div>
        {/* states section */}
        <div className="flex flex-col justify-evenly items-center mt-12">
          {states.map((state, index) => (
            <States
              key={index}
              percentage={state.percentage}
              title={state.title}
            />
          ))}
        </div>
        {/* Number of pilgrims */}
        <div className="flex flex-row justify-evenly items-center  mt-12">
          <div className="flex flex-col justify-center items-center">
            <p className="text-white text-xl ">عدد الحجاج</p>
            <p className="text-white text-2xl font-bold">58,571</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

const States = ({
  percentage,
  title,
}: {
  percentage: number;
  title: string;
}) => {
  return (
    <div className="flex flex-row justify-around gap-4 w-full items-center">
      <div className="flex flex-row justify-between items-center gap-2">
        <p className="text-xs w-[20px]">{percentage}%</p>
        <div className=" relative w-[100px] h-2 bg-[#465561] rounded-full flex self-end overflow-hidden">
          {/* // addig 2 to make it more visible */}
          <div
            className="absolute top-0 h-2 right-0 rounded-r-full bg-[#3ccddc] rounded-full "
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <p className="text-white text-xs w-full flex-1 text-end">{title}</p>
    </div>
  );
};

const Station = ({
  distance,
  code,
  title,
  connections,
  connectionId,
  children,
}: {
  distance: number;
  code: string;
  title: string;
  connections: string[];
  connectionId: string;
  children?: ReactElement
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DashboardDetails open={open} setOpen={setOpen} />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div
            id={connectionId}
            className={`flex flex-col justify-center items-center w-[120px] relative`}
          >
            <div className=" flex w-[80px] h-[80px] bg-[#445564] rounded-full justify-center items-center hover:bg-[#0da2b2] cursor-pointer">
              <p className=" font-bold text-xl">{distance}</p>
            </div>
            <div className="flex flex-col justify-center items-center mt-4 font-bold">
              <p className="text-white text-sm ">{code}</p>
              <p className="text-white text-sm ">{title}</p>
            </div>
            {children}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="text-end">أبحت</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {connections.map((connection, index) => (
            <DropdownMenuItem
              onClick={() => setOpen(true)}
              key={index}
              className="text-end cursor-pointer"
            >
              {connection}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

const DashboardDetails = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Sheet
      onOpenChange={(open) => setOpen(open)}
      open={open}
      modal={true}
    // full screen
    >
      <SheetContent
        side={"bottom"}
        className="w-[95%] h-[95%] m-auto mb-5 rounded-lg shadow-none border-none"
      >
        <SheetHeader>
          <SheetDescription>
            <div className="flex flex-row justify-between items-center mb-4">
              {/* filters and sort */}
              <div>
                {/* filter icon and sort icon*/}
                <div className="flex flex-row justify-between items-center gap-5">
                  {/* filter */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-funnel-fill cursor-pointer hover:text-[gray]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                  </svg>
                  {/* sort */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-filter cursor-pointer hover:text-[gray]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </div>
              </div>
              {/* states */}
              <div className="flex flex-row gap-3">
                <DetailStates number={7279} text1="فوج 81" text2="المستهدف" />
                <DetailStates number={0} text1="فوج 1" text2="المستهدف" />

                <DetailStates number={0} text1="فوج 81" text2="المستهدف" />
                <DetailStates number={0} text1="فوج 81" text2="المستهدف" />
                <DetailStates number={300} text1="فوج 81" text2="المستهدف" />
              </div>
              {/* date */}
              <div className="bg-[#354153] rounded p-5 text-center flex-col justify-center items-center mr-5 font-sm font-bold text-white">
                <p className="text-xl">11</p>
                <p>ذي الحجة</p>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
        {/* bottom conent */}
        <div className="border w-full h-[70%] mt-5 flex flex-row">
          {/* left section */}
          <div className="h-full flex-1 border flex flex-col">
            {/* header */}
            <div className="flex flex-col w-full border-b">
              <div className="flex flex-row justify-center items-center font-bold text-xs gap-1 mx-auto p-5">
                <p>أفواح وصلت</p>
                {/* status */}
                <div className="w-[5px] h-[5px] rounded-full bg-yellow-500"></div>
              </div>
              {/* table header */}
              <div className="text-xs mb-2 flex w-full text-[#9ea8b6] flex-row justify-evenly items-center">
                <p>المتحقق</p>
                <p>المجدول</p>
                <p>الفوج</p>
              </div>
            </div>
            {/* body content */}
            <div className="text-xs text-[#9ea8b6] w-full h-full flex flex-col items-center mt-2">
              <p>لا يوجد افواج ليتم عرضهم</p>
            </div>
          </div>
          {/* center section */}
          <div className="h-full flex-1 border flex flex-col">
            {/* header */}
            <div className="flex flex-col w-full border-b">
              <div className="flex flex-row justify-center items-center font-bold text-xs gap-1 mx-auto p-5">
                <p>أفواج خرجت</p>
                {/* status */}
                <div className="w-[5px] h-[5px] rounded-full bg-blue-800"></div>
              </div>
              {/* table header */}
              <div className="text-xs mb-2 flex w-full text-[#9ea8b6] flex-row justify-evenly items-center">
                <p>المتحقق</p>
                <p>المجدول</p>
                <p>الفوج</p>
              </div>
            </div>
            {/* body content */}
            <div className="text-xs text-[#9ea8b6] w-full h-full flex flex-col items-center mt-2">
              <p>لا يوجد افواج ليتم عرضهم</p>
            </div>
          </div>
          {/* right section */}
          <div className="h-full flex-1 border flex flex-col">
            {/* header */}
            <div className="flex flex-col w-full border-b">
              <div className="flex flex-row justify-center items-center font-bold text-xs gap-1 mx-auto p-5">
                <p>أفواح متبقية</p>
                {/* status */}
                <div className="w-[5px] h-[5px] rounded-full bg-purple-800"></div>
              </div>
              {/* table header */}
              <div className="text-xs mb-2 flex w-full text-[#9ea8b6] flex-row justify-evenly items-center">
                <p>المتحقق</p>
                <p>المجدول</p>
                <p>الفوج</p>
              </div>
            </div>
            {/* body content */}
            <div className="text-xs text-[#9ea8b6] w-full h-full flex flex-col items-center mt-2 overflow-y-auto">
              {/* table field */}
              <div className="text-xs flex w-full text-[#9ea8b6] flex-row justify-evenly items-center border-b pb-2">
                <p>09:08:00</p>
                <p>08:40:00</p>
                <p>P1-A02-07</p>
              </div>
              <div className="text-xs flex w-full text-[#9ea8b6] flex-row justify-evenly items-center border-b py-2">
                <p>09:08:00</p>
                <p>08:40:00</p>
                <p>P1-A02-07</p>
              </div>
              <div className="text-xs flex w-full text-[#9ea8b6] flex-row justify-evenly items-center border-b py-2">
                <p>09:08:00</p>
                <p>08:40:00</p>
                <p>P1-A02-07</p>
              </div>
              <div className="text-xs flex w-full text-[#9ea8b6] flex-row justify-evenly items-center border-b py-2">
                <p>09:08:00</p>
                <p>08:40:00</p>
                <p>P1-A02-07</p>
              </div>
              <div className="text-xs flex w-full text-[#9ea8b6] flex-row justify-evenly items-center border-b py-2">
                <p>09:08:00</p>
                <p>08:40:00</p>
                <p>P1-A02-07</p>
              </div>
              <div className="text-xs flex w-full text-[#9ea8b6] flex-row justify-evenly items-center border-b py-2">
                <p>09:08:00</p>
                <p>08:40:00</p>
                <p>P1-A02-07</p>
              </div>
              <div className="text-xs flex w-full text-[#9ea8b6] flex-row justify-evenly items-center border-b py-2">
                <p>09:08:00</p>
                <p>08:40:00</p>
                <p>P1-A02-07</p>
              </div>
              <div className="text-xs flex w-full text-[#9ea8b6] flex-row justify-evenly items-center border-b py-2">
                <p>09:08:00</p>
                <p>08:40:00</p>
                <p>P1-A02-07</p>
              </div>
              <div className="text-xs flex w-full text-[#9ea8b6] flex-row justify-evenly items-center border-b py-2">
                <p>09:08:00</p>
                <p>08:40:00</p>
                <p>P1-A02-07</p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// detail states
const DetailStates = ({
  number,
  text1,
  text2,
}: {
  number: number;
  text1: string;
  text2: string;
}) => {
  // in circle progress bar using the number above
  return (
    <div
      className={`w-[80px] h-[80px] ${number !== 0 ? "bg-[#fc6f6c]" : "bg-[#435160]"
        } border rounded-full p-1`}
    >
      <div className="rounded-full w-full h-full bg-[#262f3d] font-bold flex flex-col justify-center items-center text-white text-xs">
        <p>{number}</p>
        <p>{text1}</p>
      </div>
      <p className="text-white font-bold text-center mt-3 text-xs">{text2}</p>
    </div>
  );
};
