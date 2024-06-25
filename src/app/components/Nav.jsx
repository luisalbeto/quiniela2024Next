'use client'
import { Container } from "./Container";
import { Logo } from "./Logo";

export const Nav = () => {
  return (
    <div className="w-full bg-gradient-to-b from-lila to-sky">
      <div className="py-5 border-b-[5]">
        <Container>
          <div className="flex flex-row items-center gap-8 md:gap-0">
            <div className="flex-none">
              <Logo />
            </div>
            <div className="flex flex-row gap-8  w-full justify-center text-2xl hover:text-turquesa transition-colors text-violet font-newJune font-extrabold ">
              Quiniela Copa America 2024 Crazy Imagine
            </div>
            <div className="flex flex-row gap-4 w-full justify-end">
              
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};