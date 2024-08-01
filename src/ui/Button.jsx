import { Link } from "react-router-dom"

function Button({children,disabled,to,type,onClick}) {
    
    const   base = "bg-yellow-400 text-sm uppercase font-semibold text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:bg-yellow-300 disabled:cursor-not-allowed ";      
    const style = {
      
        primary: base + ' py-3 px-4 md:px-6 md:py-4 ',
        small: base + ' py-2 px-4 md:px-5 md:py-2.5 text-xs ',
        round: base + ' py-1 px-2.5 md:px-3.5 md:py-2 text-sm ',
        secondary:  'uppercase text-sm font-semibold text-stone-400 border-2 border-stone-300 inline-block tracking-wide rounded-full hover:bg-stone-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5 ',
        
    }   
    if(to)
        return( <Link to={to} className={style[type]}>
        {children}
        </Link>);
    if(onClick) 
        return (
            <button disabled={disabled} className={style[type]} onClick={onClick}>
                {children}
            </button>
        );   
    return (
        <button disabled={disabled} className={style[type]}>
            {children}
        </button>
    )
}

export default Button
