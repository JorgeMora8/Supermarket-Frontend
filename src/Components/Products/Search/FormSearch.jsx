const FormSearch = ({handleSubmit, searchName, setSearchName}) => { 

    return( 
      
      <div className="formContainer">
        <b className="formContainerTitle">Search product</b>
        <form className="d-flex searchForm" action='/search' onSubmit={handleSubmit}>
          <input 
          required
          className="form-control me-2" 
          type="search" 
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="add a product name or category" />
          <button className="btnSearchProduct" type="submit">Search</button>
        </form>
      </div>
    )
  
  }

export default FormSearch