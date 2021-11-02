import React from 'react'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function About() {
  
  return (
      <Layout>
        <div className="container mx-auto md:px-12">
            <article className="relative z-10 w-full flex flex-wrap">
                <div className="w-full bg-white p-12 md:p-24 bg-white">
                    <h1 className="text-2xl md:text-5xl font-black text-gray-800 tracking-widest leading-tight mb-12">
                      About Me.
                    </h1>
                    <div className="max-w-m font-serif leading-loose tracking-wide text-lg text-black mb-12 format-content">
                </div>
            </div>
            </article>
        </div>
        <section className="bg-white dark:bg-gray-800">
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
          <div className="text-container max-w-6xl mx-auto pt-20">
            <p className="leading-loose text-2xl md:text-4xl font-semibold  mx-4" style={{ lineHeight: "3rem" }}>I'm a wev developer that loves building websites and applications that make an impact millions of lives.</p>
          </div>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
            <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
              <div className="inline-flex flex-col">
                <div>
                  <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Contact</h1>
                  <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">For any sort help / enquiry, shoot a <a href="mailto:roleary81@gmail.com" className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300">mail</a> and I'll get back. I swear.</p>
                </div>
              <div className="mt-8"><h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Job Opportunities</h1><p className="text-lg text-gray-500 mt-4 dark:text-gray-300">I'm looking for a job currently, If you see me as a good fit, check my <a href="" target="__blank" className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300">CV</a> and I'd love to work for you.</p>
            </div>
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">Social Links</h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center ">
                  <a href="https://facebook.com/" className="flex flex-row items-center space-x-4 group"><div className="my-4">→</div><p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300"><div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>Facebook</p></a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a href="https://twitter.com/ro_oleary" className="flex flex-row items-center space-x-4 group"><div className="my-4">→</div><p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300"><div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>Twitter</p></a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a href="https://github.com/RoOLeary" className="flex flex-row items-center space-x-4 group">
                    <div className="my-4">→</div><p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300"><div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>GitHub</p></a></div>
                    <div className="flex flex-row justify-start items-center"><a href="https://www.linkedin.com/in/ronanoleary/" className="flex flex-row items-center space-x-4 group"><div className="my-4">→</div><p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300"><div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>LinkedIn</p></a></div>
                    </div></div><div className="col-span-1 md:col-span-2"><p className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">I've been developing full-stack applications for 13 years. Although, at the time, I didn't know what full-stack meant at that time because the term was still the ubiqutous "web designer" back then. </p><p className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">After learning HTML, PHP, JS and CSS, I came up with a brilliant idea of using Tailwind so that I don't have to style everything by myself and - for obvious reasons - if you know Tailwind, you're all cool by me.</p><p className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">But now, I'm a legend. I've been coding in React, Vue, Node.js, PHP, MySQL, Tailwind, Next.js, Craft CMS, WordPress, Laravel...to name a few. Although I barely know the syntax (Psst, Stack overflow!), I consider myself a Ninja developer. Which is what I would say if I were a total douche.</p>
                <div className="flex flex-row flex-wrap mt-8"><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" className="h-20 w-20 mx-4 my-4" /><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png" className="h-20 w-20 mx-4 my-4" /><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" className="h-20 w-20 mx-4 my-4" /><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" className="h-20 w-20 mx-4 my-4" /><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" className="h-20 w-20 mx-4 my-4"/><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png" className="h-20 w-20 mx-4 my-4"/><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png" className="h-20 w-20 mx-4 my-4" /><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" className="h-20 w-20 mx-4 my-4"/><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" className="h-20 w-20 mx-4 my-4" /><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" className="h-20 w-20 mx-4 my-4" /><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" className="h-20 w-20 mx-4 my-4" /><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" className="h-20 w-20 mx-4 my-4" /></div></div></div></div></section>
      
                <br /><br /><br />
      <br />      <footer className="relative bg-gray-300 pt-8 pb-6">
          <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{ height: "80px", transform: "translateZ(0)"}}>
              <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                  <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
              </svg>
          </div>
      
    </footer>
  </Layout>  
    )
}
