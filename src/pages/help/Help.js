import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

function Help() {
  const [activePage, setActivePage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const handlePaginationClick = (page) => {
    setActivePage(page);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setActivePage(1); 
  };

  const accordionItems = [
    { question: "What is the HS code?", answer: "The HS code is a standardized numerical method for classifying traded products. It stands for Harmonized Commodity Description and Coding System." },
    { question: "What are HS Codes?", answer: "HS Codes are a classification system used to classify goods traded internationally. They are organized by the World Customs Organization (WCO) and used by customs authorities around the world." },
    { question: "What is HS classification?", answer: "HS classification is the process of assigning a specific HS code to a product based on its characteristics and intended use. This classification is used for customs declarations and trade statistics." },
    { question: "Why is HS classification important?", answer: "HS classification is important for international trade because it enables uniformity and consistency in classifying goods, facilitating the smooth flow of goods across borders, and ensuring compliance with customs regulations." },
    { question: "How do companies use HS codes?", answer: "Companies use HS codes for various purposes, including customs declarations, tariff determination, trade documentation, logistics planning, and market analysis." },
    { question: "Is HS classification difficult?", answer: "HS classification can be complex for certain products due to their diverse nature and varying interpretations of classification rules. However, with proper training and resources, it can be mastered." },
    { question: "Do HS codes ever change?", answer: "HS codes are periodically updated by the World Customs Organization (WCO) to reflect changes in technology, trade patterns, and product classifications. Therefore, they can change over time." },
    { question: "What are the consequences of misclassification?", answer: "Misclassification of goods can lead to customs delays, fines, penalties, shipment rejections, and legal liabilities for importers and exporters. It can also affect trade relations and competitiveness." },
    { question: "Who is responsible for HS classification?", answer: "The responsibility for HS classification typically lies with the importer or exporter of goods. However, customs brokers, trade consultants, and regulatory authorities also play important roles in ensuring accurate classification." },
    { question: "Why is HS classification so difficult?", answer: "HS classification can be challenging due to the complexity of product descriptions, evolving trade regulations, and the need for interpretation of classification rules. Additionally, differences in classification practices across countries can add to the complexity." },
    { question: "What is a Trade Portal?", answer: "A Trade Portal is an online platform or website that provides information, tools, and resources related to international trade. It may offer services such as trade statistics, customs regulations, market analysis, and trade facilitation tools." },
    { question: "How do I calculate duty for my importation?", answer: "Duty calculation for importation involves factors such as the value of the goods, their classification under the HS code, the applicable tariff rates, and any preferential trade agreements. Customs authorities or trade experts can assist in determining the duty payable." },
    { question: "What is C.I.F?", answer: "C.I.F stands for Cost, Insurance, and Freight. It is a type of international trade term where the seller is responsible for the cost of goods, insurance, and freight until they reach the destination port." },
    { question: "What is F.O.B amount?", answer: "F.O.B (Free On Board) amount refers to the total value of goods at the point of shipment, including the cost of the goods and all charges up to loading them onto the vessel. After loading, the buyer assumes responsibility for the goods and any subsequent costs." },
    { question: "How do I navigate the trade hub?", answer: "To navigate the trade hub, you can use the search function to find relevant documents, explore different sections or categories, and utilize any navigation menus or tools provided on the platform." },
    { question: "What is a controlling agency?", answer: "A controlling agency is an organization or government body responsible for regulating and overseeing specific aspects of trade or commerce, such as customs, import/export controls, or product standards." },
    { question: "Which agency controls the product I want to import?", answer: "The controlling agency for the product you want to import depends on various factors, including the nature of the product, its intended use, and regulatory requirements. You may need to consult with relevant government authorities or industry experts for specific guidance." },
    { question: "How do I know if the commodity I want to import is prohibited?", answer: "You can check if the commodity you want to import is prohibited by referring to official government regulations, import/export control lists, or contacting relevant authorities responsible for trade regulations and customs clearance." },
    { question: "What is Customs Processing Codes?", answer: "Customs Processing Codes are codes used by customs authorities to indicate the status or processing stage of a customs declaration or clearance. They help track the progress of import/export transactions through the customs process." },
    { question: "How do I use the Customs Processing Codes?", answer: "To use Customs Processing Codes, you need to understand their meanings and implications for your specific customs transaction. You can consult customs documentation, guidelines, or contact customs authorities for assistance in applying the relevant codes." },
    { question: "How do I contact a processing agency?", answer: "You can contact a processing agency by searching for their contact information on official government websites, trade directories, or contacting relevant trade associations or chambers of commerce for assistance." },
    { question: "What documents do I need to obtain for importing my product?", answer: "The documents you need to obtain for importing your product may vary depending on factors such as the nature of the product, its origin, destination country requirements, and any applicable trade agreements. Commonly required documents include a commercial invoice, packing list, bill of lading, and import/export permits or licenses." },
    { question: "Why is the Customs exchange rate different from the commercial exchange rate?", answer: "The Customs exchange rate may differ from the commercial exchange rate due to factors such as government policies, currency fluctuations, and exchange rate regimes. Customs authorities may use different exchange rates for valuation purposes to ensure consistency and compliance with trade regulations." },
    { question: "Where can I download documents from the Nigeria trade hub?", answer: "You can download documents from the Nigeria trade hub by visiting their official website or online." },
    { question: "How do I know if my product enjoys preferential treatment due to trade agreements such as to ETLS?", answer: "To determine if your product enjoys preferential treatment under trade agreements like ETLS (ECOWAS Trade Liberalization Scheme), you should review the terms of the agreement and consult with customs authorities or trade experts. Additionally, you can check for any applicable tariff preferences or duty exemptions outlined in the agreement." },






  ];


  const filteredAccordionItems = accordionItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (activePage - 1) * 10;
  const endIndex = activePage * 10;
  const displayedAccordionItems = filteredAccordionItems.slice(startIndex, endIndex);

  return (
    <div className='Accordion' style={{ width: '80%', marginTop: '4%', marginLeft: '10%', marginRight: '4%', padding: '2%' }}>
      <div className='Accodian2' style={{ width: '30%', float: 'right', textAlign: 'right' }}>
        <Form>
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        <br />
      </div>
      <Accordion defaultActiveKey="0">
        <br />
       <div className='dabagi' style={{fontFamily:'sans-serif', fontSize:'20px', fontKerning:'auto'}}>
       <b>Frequently Asked Questions</b>
       </div>
       
       
        <br />
        {displayedAccordionItems.map((item, index) => (
          <Accordion.Item key={index} eventKey={`${index}`}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

    
      <div style={{ marginTop: '20px' }}>
        <Pagination>
          <Pagination.First onClick={() => handlePaginationClick(1)} />
          <Pagination.Prev onClick={() => handlePaginationClick(activePage - 1)} />
          {Array.from({ length: Math.ceil(filteredAccordionItems.length / 10) }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === activePage}
                onClick={() => handlePaginationClick(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            );
          })}
          <Pagination.Next onClick={() => handlePaginationClick(activePage + 1)} />
          <Pagination.Last onClick={() => handlePaginationClick(Math.ceil(filteredAccordionItems.length / 10))} />
        </Pagination>
      </div>
    </div>
  );
}

export default Help;
