import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        aria-label="Global"
        className="mx-8 my-8 md:mx-28 lg:mx-44 flex max-w-full items-center justify-between"
      >
        <div className="flex flex-row items-center lg:flex-1 ">
          <a href="#" className="-m-1.5 p-1.5">
            <img
              alt=""
              src="https://media.licdn.com/dms/image/v2/D4E03AQHJM6X1x_n2vw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718250188894?e=1729123200&v=beta&t=8Tqy_cFB0x5UpI_qhM9MW9VqZisyqu7oPd4rtEfOjSA"
              className="h-10 w-auto md:h-16 md:w-16 me-5 my-5 rounded-full"
            />
          </a>
          <p className="text-white text-2xl font-bold">Anrubio Dev</p>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a
            href="#hero"
            className="text-xl font-semibold leading-6 text-white hover:text-amber-400"
          >
            Home
          </a>
          <a
            href="#proyectos"
            className="text-xl font-semibold leading-6 text-white hover:text-amber-400"
          >
            Proyectos
          </a>
          <a
            href="#experiencia"
            className="text-xl font-semibold leading-6 text-white hover:text-amber-400"
          >
            Experiencia
          </a>
          <a
            href="#contacto"
            className="text-xl font-semibold leading-6 text-white hover:text-amber-400"
          >
            Contacto
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Proyectos
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Experiencia
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
