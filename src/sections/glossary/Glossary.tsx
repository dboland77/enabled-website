import { useState } from 'react';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import GlossaryNav from './GlossaryNav';
import Drawer from '@mui/material/Drawer';

export default function Glossary() {
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  return (
    <Container sx={{ mb: 2 }}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {<GlossaryNav />}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {<GlossaryNav />}
      </Drawer>
      <GlossaryNav />
      <Container sx={{ mb: 3 }}>
        <dl id="a">
          <dt>ACORD</dt>
          <dd className="fintech">
            Association for Cooperative Operations Research and Development
            <p>
              A non-profit organization that provides the global insurance industry with data
              standards and implementation solutions.
            </p>
          </dd>

          <dt>AMD</dt>
          <dd className="software">
            Asynchronous Module Definition
            <p>A specification for the programming language JavaScript.</p>
          </dd>

          <dt>AMS</dt>
          <dd className="fintech">
            Agency Management System Products
            <p>
              May include back-office features, client relationship management software and
              marketing automation.
            </p>
          </dd>

          <dt>APD</dt>
          <dd className="software">
            Analysis Process Designer
            <p>
              SAP product; a workbench with an intuitive graphical user interface for creating,
              executing, and monitoring analysis processes.
            </p>
          </dd>

          <dt>API</dt>
          <dd className="software">
            Application Programming Interface
            <p>
              An application programming interface is a set of subroutine definitions, communication
              protocols, and tools for building software. In general terms, it is a set of clearly
              defined methods of communication among various components.
            </p>
          </dd>

          <dt>APAC</dt>
          <dd className="fintech">Asia Pacific region</dd>

          <dt>ARD</dt>
          <dd className="fintech">
            Anniversary Rating Date
            <p>
              The date that governs the application of rates and experience modifiers when a prior
              policy has been canceled midterm.{' '}
              <a href="https://www.irmi.com/term/insurance-definitions/anniversary-rating-date">
                Read more
              </a>
            </p>
          </dd>

          <dt>ARIA</dt>
          <dd className="ux">
            Accessible Rich Internet Applications
            <p>
              A set of attributes that define ways to make web content and web applications more
              accessible to people with disabilities.
            </p>
          </dd>

          <dt>ARR</dt>
          <dd className="fintech">
            Annual Recurring Revenue
            <p>A metric for SaaS or subscription businesses with Term subscriptions.</p>
          </dd>

          <dt>ART</dt>
          <dd className="fintech">Automated Rating Testing</dd>

          <dt>AWS</dt>
          <dd className="software">
            Amazon Web Services
            <p>Popular hosting platform.</p>
          </dd>
        </dl>

        <dl id="b">
          <dt>BE</dt>
          <dd className="software">
            Back End
            <p>Database stuff rather than user interface.</p>
          </dd>

          <dt>BI</dt>
          <dd className="fintech">Bodily Injury</dd>

          <dt>BI</dt>
          <dd className="fintech">Business Intelligence</dd>

          <dt>BO</dt>
          <dd className="fintech">Business Owner</dd>

          <dt>BOP</dt>
          <dd className="fintech">Business Owner Policy</dd>

          <dt>BPMN</dt>
          <dd className="fintech">
            Business Process Model and Notation
            <p>
              Graphical representation for specifying business processes in a business process
              model.
            </p>
          </dd>
        </dl>

        <dl id="c">
          <dt>CA</dt>
          <dd className="fintech">
            Commercial Auto
            <p>Commercial vehicle insurance.</p>
          </dd>

          <dt>CA-7</dt>
          <dd className="fintech">
            Job scheduling/workflow automation software
            <p>Sold by CA Technologies.</p>
          </dd>

          <dt>CDCE</dt>
          <dd className="software">
            Concurrent Data Change Exception
            <p>Scary Java stuff.</p>
          </dd>

          <dt>CDO</dt>
          <dd className="fintech">Chief Digital Officer</dd>

          <dt>Ceding</dt>
          <dd className="fintech">
            The amount of risk transfered to a re-insurer.
            <p>Who watches insures the watchmen insurer?</p>
          </dd>

          <dt>CL</dt>
          <dd className="fintech">
            Commercial Lines
            <p>Insurance for commercial purposes.</p>
          </dd>

          <dt>CLOC</dt>
          <dd className="fintech">Continuous LOCalization</dd>

          <dt>CM</dt>
          <dd className="fintech">Contact Manager</dd>

          <dt>CP</dt>
          <dd className="fintech">Commercial Property</dd>

          <dt>CR</dt>
          <dd className="fintech">Customer Relations</dd>

          <dt>CRM</dt>
          <dd className="fintech">Customer Relationship Management</dd>

          <dt>CRUD</dt>
          <dd className="software">Create, Read, Update and Delete</dd>

          <dt>CSR</dt>
          <dd className="fintech">Customer Service Representative</dd>

          <dt>CX</dt>
          <dd className="ux">Customer eXperience</dd>
        </dl>

        <dl id="d">
          <dt>DBA</dt>
          <dd className="fintech">
            Doing Business As
            <p>
              A company is said to be &ldquo;doing business as&rdquo; when the name under which they
              operate their business differs from its legal, registered name.
            </p>
          </dd>

          <dt>DBCC</dt>
          <dd className="software">Database Consistency Checker</dd>

          <dt>Dev</dt>
          <dd className="software">
            Short for developer.
            <p>Neutral mob.</p>
          </dd>

          <dt>DEX</dt>
          <dd className="ux">Digital EXperience</dd>

          <dt>DG</dt>
          <dd className="ux">Design Guide</dd>

          <dt>DH</dt>
          <dd className="fintech">
            Data Hub
            <p>
              A data hub is a collection of data from multiple sources organized for distribution,
              sharing, and often subsetting and sharing.
            </p>
          </dd>

          <dt>DID</dt>
          <dd className="software">Detailed Infrastructure Document</dd>

          <dt>DTC</dt>
          <dd className="fintech">
            Direct To Customer
            <p>
              Selling a product directly to your end customers without third-party retailers,
              wholesalers, or other middlemen.
            </p>
          </dd>

          <dt>DTO</dt>
          <dd className="software">
            Data Transfer Object
            <p>An object that carries data between processes.</p>
          </dd>
        </dl>

        <dl id="e">
          <dt>E2E</dt>
          <dd className="software">
            End to End
            <p>
              The end-to-end principle is a design framework in computer networking. In networks
              designed according to this principle, application-specific features reside in the
              communicating end nodes of the network, rather than in intermediary nodes, such as
              gateways and routers, that exist to establish the network.
            </p>
          </dd>

          <dt>EDC</dt>
          <dd className="fintech">European Development Centre</dd>

          <dt>ELC</dt>
          <dd className="fintech">Employee Leasing Company</dd>

          <dt>EMEA</dt>
          <dd className="fintech">Europe, Middle East and Africa</dd>

          <dt>EO</dt>
          <dd className="fintech">
            End Of
            <p>As in &ldquo;end of fiscal year&rdquo;.</p>
          </dd>

          <dt>EPD</dt>
          <dd className="fintech">Expertise Development Program</dd>

          <dt>EPLI</dt>
          <dd className="fintech">
            Employment Practices Liability Insurance
            <p>
              Provides coverage to employers against claims made by employees allegingd
              iscrimination, wrongful termination or other employment-related issues, such as
              failure to promote.
            </p>
          </dd>

          <dt>ERC</dt>
          <dd className="fintech">Effective Rate Change</dd>

          <dt>ERC</dt>
          <dd className="fintech">Electronic Rating Content</dd>

          <dt>ETA</dt>
          <dd className="software">Estimated Time of Arrival</dd>
        </dl>

        <dl id="f">
          <dt>FacRe</dt>
          <dd className="fintech">
            Faculative Reinsurance
            <p>
              One of the two types of reinsurance, with the other type being treaty reinsurance.
            </p>
          </dd>

          <dt>FB</dt>
          <dd className="software">Facebook</dd>

          <dt>FE</dt>
          <dd className="software">Front End</dd>

          <dt>FNOL</dt>
          <dd className="fintech">First Notice Of Loss</dd>

          <dt>FM</dt>
          <dd className="software">Facebook Managers</dd>

          <dt>FSC</dt>
          <dd className="software">
            Financial Services Cloud
            <p>Salesforce product.</p>
          </dd>

          <dt>FY</dt>
          <dd className="fintech">Fiscal Year</dd>
        </dl>

        <dl id="g">
          <dt>GBU</dt>
          <dd className="software">Good, Bad, Ugly</dd>

          <dt>GL</dt>
          <dd className="fintech">General Liability</dd>

          <dt>GM</dt>
          <dd className="software">
            Golden Master
            <p>Also known as a code freeze.</p>
          </dd>

          <dt>GUI</dt>
          <dd className="ux">Graphical User Interface</dd>

          <dt>GTP</dt>
          <dd className="fintech">Guidance To Product</dd>

          <dt>GWP</dt>
          <dd className="fintech">
            Gross Written Premium
            <p>
              Gross premiums written is the sum of both direct premiums written and assumed premiums
              written before the effect of ceded reinsurance.
            </p>
          </dd>
        </dl>

        <dl id="h">
          <dt>HO</dt>
          <dd className="fintech">Home Owner</dd>

          <dt>HSL</dt>
          <dd className="software">Hue Saturation Lightness</dd>
        </dl>

        <dl id="i">
          <dt>I18N</dt>
          <dd className="software">Internationalisation</dd>

          <dt>IA</dt>
          <dd className="software">Information Architecture</dd>

          <dt>ILS</dt>
          <dd className="fintech">
            Insurance Linked Securities
            <p>Financial instruments whose values are driven by insurance loss events.</p>
          </dd>

          <dt>ISO</dt>
          <dd className="fintech">Insurance Services Office</dd>

          <dt id="iso">ISO</dt>
          <dd className="software">International Organization for Standardization</dd>

          <dt>IxD</dt>
          <dd className="ux">Interaction Design</dd>
        </dl>

        <dl id="j">
          <dt>JSON</dt>
          <dd className="software">
            JavaScript Object Notation
            <p>
              An open-standard file format that uses human-readable text to transmit data objects
              consisting of attribute&ndash;value pairs and array data types.
            </p>
          </dd>
        </dl>

        <dl id="k">
          <dt>KT</dt>
          <dd className="software">Knowledge Transfer</dd>

          <dt>KPI</dt>
          <dd className="fintech">Key Performance Indicator</dd>
        </dl>

        <dl id="l">
          <dt>L11N</dt>
          <dd className="software">Localisation</dd>

          <dt>LC</dt>
          <dd className="fintech">Labor Contractor</dd>

          <dt>LOB</dt>
          <dd className="fintech">Line of Business</dd>

          <dt>LTV</dt>
          <dd className="fintech">Life Time Value</dd>

          <dt>LTV</dt>
          <dd className="fintech">Loan To Value</dd>
        </dl>

        <dl id="m">
          <dt>MC</dt>
          <dd className="fintech">Member Certificate</dd>

          <dt>MCP</dt>
          <dd className="fintech">Multiple Coordinated Policies</dd>

          <dt>MIF</dt>
          <dd className="software">Master Input File</dd>

          <dt>MP</dt>
          <dd className="fintech">Master Policy</dd>

          <dt>MTA</dt>
          <dd className="fintech">
            Mid-Term Adjustment
            <p>A change to an insurance policy prior to the end of the policy period.</p>
          </dd>

          <dt>MTD</dt>
          <dd className="fintech">Month To Date</dd>

          <dt>MVP</dt>
          <dd className="software">Minimum Viable Product</dd>
        </dl>

        <dl id="n">
          <dt>NAIC</dt>
          <dd className="fintech">National Association of Insurance Commissioners</dd>

          <dt>NCCI</dt>
          <dd className="fintech">National Council on Compensation Insurance</dd>

          <dt>NCOIL</dt>
          <dd className="fintech">National Conference Of Insurance Legislators</dd>

          <dt>NFR</dt>
          <dd className="software">
            Non-Functional Requirement
            <p>E.g. might relate to performance or stability, or some other sign of quality.</p>
          </dd>

          <dt>NOL</dt>
          <dd className="fintech">Notice Of Loss</dd>

          <dt>NXOL</dt>
          <dd className="fintech">Net eXcess Of Loss</dd>
        </dl>

        <dl id="o">
          <dt>OEG</dt>
          <dd className="fintech">Operational Effectiveness Group</dd>

          <dt>OOTB</dt>
          <dd className="software">Out Of The Box</dd>

          <dt>OOTO</dt>
          <dd className="fintech">Out Of The Office</dd>

          <dt>OR</dt>
          <dd className="fintech">Operational Readiness</dd>
        </dl>

        <dl id="p">
          <dt>p13n</dt>
          <dd className="software">Personalization</dd>

          <dt>P&amp;C</dt>
          <dd className="fintech">Property and Casuality Insurance</dd>

          <dt>PA</dt>
          <dd className="fintech">Personal Auto</dd>

          <dt>PAC</dt>
          <dd className="fintech">Predictive Analytics for Claims</dd>

          <dt>PAP</dt>
          <dd className="fintech">Predictive Analytics for Profitability</dd>

          <dt>PCA</dt>
          <dd className="fintech">Product Content Analysis</dd>

          <dt>PD</dt>
          <dd className="software">Product Development</dd>

          <dt>PD</dt>
          <dd className="software">Product Definition</dd>

          <dt>PE</dt>
          <dd className="fintech">Program Enablement</dd>

          <dt>PEO</dt>
          <dd className="fintech">Professional Employer Organisation</dd>

          <dt>PFA</dt>
          <dd className="fintech">Please find attached</dd>

          <dt>PG</dt>
          <dd className="fintech">Policy Group</dd>

          <dt>PH</dt>
          <dd className="fintech">Policy Holder</dd>

          <dt>PH</dt>
          <dd className="fintech">Payment History</dd>

          <dt>PIP</dt>
          <dd className="fintech">Personal Injury Protection</dd>

          <dt>PL</dt>
          <dd className="fintech">Personal Lines</dd>

          <dt>PM</dt>
          <dd className="software">Project Manager</dd>

          <dt>PN</dt>
          <dd className="fintech">Private Note</dd>

          <dt>Pod</dt>
          <dd className="software">A team of developers</dd>

          <dt>PoC</dt>
          <dd className="software">Proof of Concept</dd>

          <dt>PoS</dt>
          <dd className="fintech">Point of Sale</dd>

          <dt>POV</dt>
          <dd className="fintech">
            Point Of View
            <p>Related to sales department.</p>
          </dd>

          <dt>PPC</dt>
          <dd className="fintech">
            Public Protection classNameification
            <p>
              Ties in with <a href="#iso">ISO</a>, asses property risk.
            </p>
          </dd>

          <dt>PR</dt>
          <dd className="fintech">Public Relations</dd>

          <dt>PR</dt>
          <dd className="software">
            Pull Request
            <p>Developer ritual.</p>
          </dd>

          <dt>PTO</dt>
          <dd className="fintech">Paid Time Off</dd>

          <dt>PUP</dt>
          <dd className="fintech">Personal Umbrella Policy</dd>
        </dl>

        <dl id="q">
          <dt>QBR</dt>
          <dd className="fintech">Quarterly Business Review</dd>

          <dt>Q&amp;B</dt>
          <dd className="fintech">Quote and Buy</dd>

          <dt>QnB</dt>
          <dd className="fintech">Quote and Buy</dd>
        </dl>

        <dl id="r">
          <dt>RAG</dt>
          <dd className="software">
            Red Amber Green
            <p>A status measurement.</p>
          </dd>

          <dt>Rate Book</dt>
          <dd className="fintech">Manual of classNameifications and rates</dd>

          <dt>RESTful</dt>
          <dd className="software">REpresentational State Transfer</dd>

          <dt>RGB</dt>
          <dd className="software">Red Green Blue</dd>

          <dt>RI</dt>
          <dd className="fintech">Re-Insurance</dd>

          <dt>RM</dt>
          <dd className="fintech">Reinsurance Management</dd>

          <dt>RM</dt>
          <dd className="fintech">Rating Management</dd>

          <dt>ROAM</dt>
          <dd className="software">
            Resolved Owned Accepted Mitigated
            <p>Risk management.</p>
          </dd>

          <dt>RT</dt>
          <dd className="fintech">Rating Testing</dd>
        </dl>

        <dl id="s">
          <dt>SaaS</dt>
          <dd className="fintech">Software as a Service</dd>

          <dt>SAM</dt>
          <dd className="fintech">Services Account Manager</dd>

          <dt>SASS</dt>
          <dd className="software">Syntactically Awesome Style Sheets</dd>

          <dt>SAP</dt>
          <dd className="fintech">
            Systems, Applications &amp; Products
            <p>Multinational software corporation that makes enterprise software.</p>
          </dd>

          <dt>SB</dt>
          <dd className="fintech">Surety Bond</dd>

          <dt>SBT</dt>
          <dd className="fintech">Standards Based Template</dd>

          <dt>SCSS</dt>
          <dd className="software">SASSy Cascading Style Sheet</dd>

          <dt>SEM</dt>
          <dd className="fintech">Search Engine Marketing</dd>

          <dt>SEO</dt>
          <dd className="fintech">Search Engine Optimisation</dd>

          <dt>SF</dt>
          <dd className="fintech">Salesforce</dd>

          <dt>SFSC</dt>
          <dd className="fintech">Salesforce Financial Services Cloud</dd>

          <dt>SI</dt>
          <dd className="software">Service Integrater</dd>

          <dt>SLA</dt>
          <dd className="software">
            Service Level Agreement
            <p>Fulfilling the contract.</p>
          </dd>

          <dt>SKU</dt>
          <dd className="fintech">Stock Keeping Unit</dd>

          <dt>SMB</dt>
          <dd className="fintech">Small and Medium Business</dd>

          <dt>SMB</dt>
          <dd className="software">Server Message Block</dd>

          <dt>SME</dt>
          <dd className="fintech">Subject Matter Expert</dd>

          <dt>SME</dt>
          <dd className="fintech">Small and Medium-sized Enterprise</dd>

          <dt>SOR</dt>
          <dd className="software">System Of Record</dd>

          <dt>SP</dt>
          <dd className="software">Subscription Policy</dd>

          <dt>STP</dt>
          <dd className="fintech">Straight-Through Processing</dd>

          <dt>SWAG</dt>
          <dd className="software">Scientific Wild-Ass Guess</dd>
        </dl>

        <dl id="t">
          <dt>TCO</dt>
          <dd className="fintech">Total Cost of Ownership</dd>

          <dt>TIV</dt>
          <dd className="fintech">Total Insurable Value</dd>

          <dt>TOC</dt>
          <dd className="fintech">Total Ownership Cost</dd>

          <dt>TS</dt>
          <dd className="software">Test Suite</dd>
        </dl>

        <dl id="u">
          <dt>UAT</dt>
          <dd className="ux">
            User Acceptance Testing
            <p>The last phase of the software testing process software.</p>
          </dd>

          <dt>UI</dt>
          <dd className="software">User Interface</dd>

          <dt>UM</dt>
          <dd className="fintech">Underwriting Manager</dd>

          <dt>UW</dt>
          <dd className="fintech">Underwriter</dd>

          <dt>UX</dt>
          <dd className="ux">User eXperience</dd>
        </dl>

        <dl id="v">
          <dt>VIN</dt>
          <dd className="fintech">Vehicle Identification Number</dd>
        </dl>

        <dl id="w">
          <dt>WC</dt>
          <dd className="fintech">Workers Compensation</dd>

          <dt>WCD</dt>
          <dd className="fintech">Workers Compensation Division</dd>

          <dt>WFH</dt>
          <dd className="fintech">Work From Home</dd>

          <dt>WW</dt>
          <dd className="fintech">World Wide</dd>
        </dl>

        <dl id="x">
          <dt>XML</dt>
          <dd className="software">eXtensible Markup Language</dd>

          <dt>XoL</dt>
          <dd className="fintech">eXcess of Loss</dd>
        </dl>

        <dl id="y">
          <dt>YTD</dt>
          <dd className="fintech">Year To Date</dd>
        </dl>
      </Container>
    </Container>
  );
}
