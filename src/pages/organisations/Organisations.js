import React, { useState } from 'react';
import { organisationData } from '../../data/organisation_Data';

function Organisations() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15); // You can adjust this value based on your preference
  const [pageNumberLimit] = useState(5); // Limit the number of pagination numbers shown
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  // const [searchInput, setSearchInput] = useState('');
  // const [filteredData, setFilteredData] = useState([]);


  // Function to filter data based on search input
  // const handleSearch = () => {
  //   const filtered = organisationData.filter(
  //     org => org.shortName.toLowerCase().includes(searchInput.toLowerCase())
  //   );
  //   setFilteredData(filtered);

  //    // Reset pagination to first page after filtering
  //    setCurrentPage(1);
  //   };
  


  // Calculate total pages
  const totalPages = Math.ceil(organisationData.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = organisationData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleFirst = () => {
    setCurrentPage(1);
    setMaxPageNumberLimit(pageNumberLimit);
    setMinPageNumberLimit(0);
  };

  const handleLast = () => {
    setCurrentPage(totalPages);
    setMaxPageNumberLimit(totalPages);
    setMinPageNumberLimit(totalPages - pageNumberLimit);
  };

  let pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>

   
      <div className="container-content">
        <h3>Organisations</h3>

        <div  style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          margin: '30px',
          justifyContent: 'justify-between',
        }}
      >
      <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'center' }}>
      <select className="form-select me-3" aria-label="Select agency">
        <option value="">All Agencies</option>
        <option value="">Government</option>
        <option value="">Private</option>
        <option value="">International</option>
        <option value="">Terminal Operators</option>
        <option value="">Freight Forwarders</option>
        <option value="">DTIs Cafes</option>
        <option value="">Shipping Line Agents</option>
        <option value="">Authorized Dealer Banks</option>
        <option value="">CustomsLicensed Agents</option>
        <option value="">Associatios</option>
        <option value="">Trade Consultants</option>
        <option value="">Authorized Insurances</option>
        <option>Others</option>
        {/* Add more options as needed */}
      </select>
    </div>
    
        

        <div style={{ display: 'flex', flexDirection: 'row', float: 'right', width: '50%', justifyContent: 'flex-end' }}>
        <input type="search2" id="search" placeholder="Enter Keyword" className="form-control me-2" />

        <input type="submit" id="search" name="search" value="Search" className="btn btn-primary ms-2" style={{ background_color: '#3AC05E' }} />
      </div>
      </div>
     

        <div className="table-responsive">
        <table className="table table-striped">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Logo</th>
                <th>Short Name</th>
                <th>Name</th>
                <th>Category</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((organisation, index) => (
                <tr key={index}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>
                  <img
                  src={organisation.logo}
                  alt="Logo"
                  style={{ color: '#3AC05E', width: '50px', height: '50px', borderRadius: '50%'}}
                />
                  </td>
                  <td>{organisation.shortName}</td>
                  <td>{organisation.Name}</td>
                  <td>{organisation.Category}</td>
                  <td>
                  <a href="view_details.html" className="btn btn-primary">View Details</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
          <nav>
            <ul className="pagination">
              <li>
                <button onClick={handleFirst} disabled={currentPage === 1}>
                  First
                </button>
              </li>
              <li>
                <button onClick={handlePrevious} disabled={currentPage === 1}>
                  Previous
                </button>
              </li>
              {pageNumbers.map((number) => {
                if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
                  return (
                    <li key={number} className={currentPage === number ? 'active' : ''}>
                      <button onClick={() => paginate(number)}>{number}</button>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
              <li>
                <button onClick={handleNext} disabled={currentPage === totalPages}>
                  Next
                </button>
              </li>
              <li>
                <button onClick={handleLast} disabled={currentPage === totalPages}>
                  Last
                </button>
              </li>
            </ul>
          </nav>
        
    </>
  );
}

export default Organisations;
