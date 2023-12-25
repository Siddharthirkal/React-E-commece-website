

const Home = (props) => {
    return <>

        <div style={{ height: '18rem', backgroundColor: 'gray', fontSize: '40px', textAlign: 'center', color: 'white' }}>
            {/* <div style={{  fontSize: '160px', textAlign: 'center', color: 'white' }}>The </div>
            <div style={{  fontSize: '160px', textAlign: 'center', color: 'white' }}> Generics</div> */}
            {/* <h2 style={{ textAlign: 'center', margin: '20px' }}>The Generics</h2> */}
            <div style={{ textAlign: 'center', margin: '20px', fontSize: '100px', fontWeight: '500' }} className="d-flex flex-xl-row justify-content-center">The Generics</div>

            <h4 className="border-3" style={{ textAlign: 'center' }}>Get our Latest Album</h4>
        </div>

        <div style={{ fontSize: '16px', textAlign: 'center' }}>
            <h3>TOURS</h3>
            <div style={{ margin: 'auto', textAlign: 'center' }} className="d-flex justify-content-center">
                <table className="table table-bordered table-hover" style={{ width: '40rem', fontSize: '14px' }}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Venue</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>JULY 16</td>
                            <td>DETROIT, MI</td>
                            <td>DTE ENERGY MUSIC THEATRE</td>
                            <td><button className="btn btn-primary">BUY TICKET</button></td>
                        </tr>
                        <tr>
                            <td>JULY 19</td>
                            <td>TORONTO, ON</td>
                            <td>BUDWEISER STAGE</td>
                            <td><button className="btn btn-primary">BUY TICKET</button></td>
                        </tr>
                        <tr>
                            <td>JULY 22</td>
                            <td>BRISTOW, VA</td>
                            <td>JIGGY LUBE LIVE</td>
                            <td><button className="btn btn-primary">BUY TICKET</button></td>
                        </tr>
                        <tr>
                            <td>JULY 29</td>
                            <td>PHOENIX, AZ</td>
                            <td>AK-CHIN PAVILION</td>
                            <td><button className="btn btn-primary">BUY TICKET</button></td>
                        </tr>
                        <tr>
                            <td>AUG 2</td>
                            <td>LAS VEGAS, NV</td>
                            <td>T-MOBILE ARENA</td>
                            <td><button className="btn btn-primary">BUY TICKET</button></td>
                        </tr>
                        <tr>
                            <td>AUG 7</td>
                            <td>CONCORD, CA</td>
                            <td>CONCORD PAVILION</td>
                            <td><button className="btn btn-primary">BUY TICKET</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <div style={{ height: '8rem', backgroundColor: 'lightblue', fontSize: '50px', textAlign: 'center', color: 'white' }} className="d-flex flex-column flex-sm-row align-items-center">
            <p className="mx-3 p-0">The</p>
            <p > Generics</p>

        </div>
    </>


}


export default Home