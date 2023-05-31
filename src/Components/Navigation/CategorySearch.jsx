import React from 'react'
import {Link} from "react-router-dom"


export const CategorySearch = () => {
  return (
    <div className='categorySearchNavContainer'>
        <div className="categoryItem">
            <img className="imgCategoryNav" src="https://th.bing.com/th/id/OIP.cwB7Ss9oPRG2NDcJkHkC5wHaFV?pid=ImgDet&w=1200&h=864&rs=1" alt="" />
                <Link to="/category/veggies" className='categoryNavLink'>
                    veggies
                </Link>
        </div>

        <div className="categoryItem">
            <img className="imgCategoryNav" src="https://pngimg.com/uploads/meat/meat_PNG3925.png" alt="" />
                <Link to="/category/butchery" className='categoryNavLink'>
                    butchery
                </Link>
        </div>

        <div className="categoryItem">
            <img className="imgCategoryNav" src="https://th.bing.com/th/id/OIP.wwwD9SATNzyKM1Akq5ziGQHaE7?pid=ImgDet&w=500&h=333&rs=1" alt="" />
                <Link to="/category/chocolate" className='categoryNavLink'>
                    chocolate
                </Link>
        </div>

        <div className="categoryItem">
            <img className="imgCategoryNav" src="https://th.bing.com/th/id/OIP.fZxVl2OlhZO3V_zOlD88LgEsCh?pid=ImgDet&w=750&h=404&rs=1" alt="" />
                <Link to="/category/higiene" className='categoryNavLink'>
                    higiene
                </Link>
        </div>

        <div className="categoryItem">
            <img className="imgCategoryNav" src="https://th.bing.com/th/id/OIP.GDqb1rKOaoFsYq5cYrODvAHaF7?pid=ImgDet&w=500&h=400&rs=1" alt="" />
                <Link to="/category/fish" className='categoryNavLink'>
                    fish
                </Link>
        </div>

        <div className="categoryItem">
            <img className="imgCategoryNav" src="../logo.png" alt="" />
                <Link to="/" className='categoryNavLink'>
                    all
                </Link>
        </div>
    </div>
  )
}
