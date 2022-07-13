import Header from "./assets/components/Header"
import SalesCard from "./assets/components/SalesCard"
import NotificationButton from "./assets/components/NotificationButton"


function App() {
    return (
        <>
            <Header />

            <main>
                <section id="sales">
                    <div className="dsmeta-container">
                        <SalesCard/>
                    </div>
                </section>
            </main>
            <NotificationButton />
        </>
    )
}

export default App
