import './header.css'

function Header () {
  return (
    <header className="header flex-center">
      <div className='header-child'>
        <p>BR.</p>
        <nav>
          <ul>
            <li>Projetos</li>
            <li>Resume</li>
            <li>Contato</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
