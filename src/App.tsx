import Header from '@/module/components/header/Header'
import Hero from '@/module/components/hero/Hero'
import Categories from '@/module/components/Categories/Categories'
import HowItsWorks from '@/module/components/HowItsWorks/HowItsWorks'
import FeedBack from '@/module/components/FeedBack/FeedBack'
import CallToAtion from '@/module/components/CallToAtion/CallToAtion'
import Footer from '@/module/components/footer/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <HowItsWorks/>
      <FeedBack/>
      <CallToAtion/>
      <Footer/>
    </div>
  )
}
