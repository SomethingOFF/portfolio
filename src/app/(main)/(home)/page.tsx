import Footer from "@/components/footer/Footer";
import ContactForm from "@/components/home/ContactForm";
import ProjectList from "@/components/home/ProjectList";
import ServiceList from "@/components/home/ServiceList";
import SkillSets from "@/components/home/SkillSets";
import Testimonials from "@/components/home/Testimonials";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="space-y-4 sm:space-y-40">
      <div className="max-w-[1420px] mx-auto ">
        <div className="w-full h-full">
          <div className="grid grid-cols-12 sm:h-[620px]">
            <div className="col-span-12 sm:col-span-7 p-8 space-y-2 flex flex-col justify-center">
              <div className="text-sm sm:text-lg">Hi I am</div>
              <div className="text-sm sm:text-lg text-primary">
                Muhammad Umair
              </div>
              <div className="text-[48px] w-full sm:text-[60px] font-bold sm:w-4/5 lg:w-2/3 lg:text-[100px] flex flex-col leading-tight">
                <span className="text-start">UI & UX</span>
                <span className="text-start sm:text-end">Designer</span>
              </div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                delectus necessitatibus cum sit autem, quo facere quas ab
                voluptatibus voluptatum illo possimus qui, earum quod molestiae
                dicta vero corrupti temporibus perferendis nulla ex facilis
                fuga. Ea optio provident enim doloremque.
              </div>
              <div className="py-4 flex items-center">
                <Button className="w-1/2">Hire Me</Button>
              </div>
            </div>
            <div className="hidden sm:flex w-60 right-0 top-[20%] sm:w-full col-span-12 sm:col-span-5 p-8 shrink-0 relative">
              <div className="max-w-[500px] max-h-[400px] h-full overflow-hidden rounded-full border-4">
                <div className="absolute left-[80px] top-24 w-60 h-10 bg-primary/60 z-10" />
                <Image
                  src={"/user.png"}
                  alt="user image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="grid grid-cols-12">
            <div className="hidden sm:flex w-60 right-0 top-[20%] sm:w-full col-span-12 sm:col-span-5 p-8 shrink-0 relative">
              <div className="max-w-[500px] max-h-[400px] h-full overflow-hidden rounded-full border-4">
                <div className="absolute left-[80px] top-24 w-60 h-10 bg-primary/60 z-10" />
                <Image
                  src={"/user.png"}
                  alt="user image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
            <div className="col-span-12 sm:col-span-7 p-8 space-y-2 flex flex-col justify-center">
              <div className="text-[24px] w-full sm:text-[40px] font-bold sm:w-4/5 lg:w-2/3 lg:text-[65px] flex flex-col leading-tight">
                About Me
              </div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                delectus necessitatibus cum sit autem, quo facere quas ab
                voluptatibus voluptatum illo possimus qui, earum quod molestiae
                dicta vero corrupti temporibus perferendis nulla ex facilis
                fuga. Ea optio provident enim doloremque.
              </div>
              <SkillSets />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col gap-y-8">
          <div className="flex flex-col items-center gap-y-4">
            <div className="text-[20px] w-full sm:text-[30px] font-bold sm:w-4/5 lg:w-2/3 lg:text-[48px] flex flex-col leading-tight text-center">
              Service
            </div>
            <div className="line-clamp-2 w-2/3 text-sm md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              a dolorum eum nesciunt similique eligendi! Doloremque assumenda
              optio amet cumque, neque nemo voluptate. Omnis dolore, distinctio
              illum, accusantium molestias est quaerat neque, provident ratione
              rem adipisci? Possimus officia, voluptate quia maxime assumenda
              consequatur
            </div>
          </div>
          <ServiceList />
        </div>
        <div className="flex items-center flex-col gap-y-8">
          <div className="flex flex-col items-center gap-y-4">
            <div className="text-[20px] w-full sm:text-[30px] font-bold sm:w-4/5 lg:w-2/3 lg:text-[48px] flex flex-col leading-tight text-center">
              Projects
            </div>
            <div className="line-clamp-2 w-2/3 text-sm md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              a dolorum eum nesciunt similique eligendi! Doloremque assumenda
              optio amet cumque, neque nemo voluptate. Omnis dolore, distinctio
              illum, accusantium molestias est quaerat neque, provident ratione
              rem adipisci? Possimus officia, voluptate quia maxime assumenda
              consequatur
            </div>
          </div>
          <ProjectList />
        </div>
      </div>
      <div className="flex items-center flex-col gap-y-8">
        <div className="flex flex-col items-center gap-y-4">
          <div className="text-[20px] w-full sm:text-[30px] font-bold sm:w-4/5 lg:w-2/3 lg:text-[48px] flex flex-col leading-tight text-center">
            Testimonials
          </div>
          <div className="line-clamp-2 w-2/3 text-sm md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit a
            dolorum eum nesciunt similique eligendi! Doloremque assumenda optio
            amet cumque, neque nemo voluptate. Omnis dolore, distinctio illum,
            accusantium molestias est quaerat neque, provident ratione rem
            adipisci? Possimus officia, voluptate quia maxime assumenda
            consequatur
          </div>
        </div>
        <Testimonials />
      </div>
      <div className="flex items-center flex-col gap-y-8">
        <div className="flex flex-col items-center gap-y-4">
          <div className="text-[20px] w-full sm:text-[30px] font-bold sm:w-4/5 lg:w-2/3 lg:text-[48px] flex flex-col leading-tight text-center">
            Testimonials
          </div>
          <div className="line-clamp-2 w-2/3 text-sm md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit a
            dolorum eum nesciunt similique eligendi! Doloremque assumenda optio
            amet cumque, neque nemo voluptate. Omnis dolore, distinctio illum,
            accusantium molestias est quaerat neque, provident ratione rem
            adipisci? Possimus officia, voluptate quia maxime assumenda
            consequatur
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
