import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'

const Home = () => {
  const loggedIn = {firstName: "Miguel", lastName: "Haesler", email: "kontakt@rechny.de"}
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
            type="greeting"  
            title="Hey,"
            user={loggedIn?.firstName + " 👋"|| "Guest"}     
            subtext="Verwalte deine Konten und Trading Ein-und Ausgaben."   
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

       
      </div>

      <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{ currentBalance: 6300.50}, { currentBalance: 7000.30}]}
       />

    </section>
  )
}

export default Home