import './Main.css'


export default props =>

        <main className='content container-fluid'>
            <div className="p-3 mt-3">
            <div>
                Para n deixa sem nada
            </div>
                {props.children}
            </div>
        </main>
