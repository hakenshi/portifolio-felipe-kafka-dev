import Section from "./section";
import { Button } from "./ui/button";

export default function Contact() {
    return (
        <Section>
            <main className="grid place-items-center">
                <div className="flex flex-col items-center justify-around">
                    <form className="bg-zinc-600/20 max-w-2xl w-1000 h-120 p-10 rounded-xl border-zinc-800 border-2 space-y-4">
                        <h2 className="text-2xl font-black text-center">Get in Touch</h2>
                        <div className="w-full">
                            <label className="block py-2" htmlFor="">Name</label>
                            <input className="w-full border-zinc-800 border-2 rounded focus:outline-2 focus:outline-red-500" type="text" />
                        </div>
                        <div className="w-full">
                            <label className="block py-2" htmlFor="">Email</label>
                            <input className="w-full border-zinc-800 border-2 rounded focus:outline-2 focus:outline-red-500" type="text" />
                        </div>
                        <div className="w-full">
                            <label className="block py-2" htmlFor="">Message</label>
                            <textarea className="w-full resize-none border-zinc-800 border-2 rounded focus:outline-2 focus:outline-red-500">

                            </textarea>
                        </div>
                        <div className="text-center p-5">
                            <Button variant={"defaultGlass"}>
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </Section>
    )
}
