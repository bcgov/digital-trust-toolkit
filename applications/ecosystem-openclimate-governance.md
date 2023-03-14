## Title: ecosystem-openclimate-governance.md

# OpenClimate Ecosystem Governance Framework

# Primary Document

## Introduction 

The OpenClimate Verifiable Credentials Ecosystem Governance Framework is a Layer Four Ecosystem Governance Framework of the Trust over IP Foundation (ToIP). The OpenClimate GHG Emissions identifier is used as a key component in building a trust layer for identification and verification of GHG emissions that require accounting. This ecosystem will assist in the development of the OpenClimate Corporate GHG Emissions Reporting Credential Pilot Project. OpenEarth Foundation is a research and deployment non-profit using cutting edge digital technologies and multi-stakeholder collaborations to advance open-source platforms that help increase planetary resilience.

## Terms of Use

These materials are made available under and are subject to the Creative Commons Attribution 4.0 International license (http://creativecommons.org/licenses/by/4.0/legalcode).

THESE MATERIALS ARE PROVIDED “AS IS.” The Trust Over IP Foundation, established as the Joint Development Foundation Projects, LLC, Trust Over IP Foundation Series ("ToIP"), and its members and contributors (each of ToIP, its members and contributors, a "ToIP Party") expressly disclaim any warranties (express, implied, or otherwise), including implied warranties of merchantability, non-infringement, fitness for a particular purpose, or title, related to the materials. The entire risk as to implementing or otherwise using the materials is assumed by the implementer and user. 

IN NO EVENT WILL ANY ToIP PARTY BE LIABLE TO ANY OTHER PARTY FOR LOST PROFITS OR ANY FORM OF INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY CHARACTER FROM ANY CAUSES OF ACTION OF ANY KIND WITH RESPECT TO THESE MATERIALS, ANY DELIVERABLE OR THE ToIP GOVERNING AGREEMENT, WHETHER BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, AND WHETHER OR NOT THE OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

## Acknowledgements 

The **OpenClimate Ecosystem**contains structural elements from the Trust over IP Metamodel that were developed by Governance Stack Working Group of the Trust over IP Foundation, the eSSIF Lab Glossary and Mental Models, were contributed to the Trust Over IP Foundation under the CC BY-SA 4.0 license.  There have also been contributions from the Concepts & Terminology Working Group at ToIP, the Human Experience Working Group at ToIP and the Ecosystem Foundry Working Group at ToIP, the work of the Governance Framework Working Group at Sovrin Foundation is also acknowledged in providing support.

## Terminology and Notation 

**ToIP Governance Requirements Glossary**

**Requirements** include any combination of Machine-Testable Requirements and Human-Auditable Requirements. Unless otherwise stated, all Requirements MUST be expressed as defined in RFC 2119.

* Mandates are Requirements that use a MUST, MUST NOT, SHALL, SHALL NOT or REQUIRED keyword.

* Recommendations are Requirements that use a SHOULD, SHOULD NOT, or RECOMMENDED keyword.

* Options are Requirements that use a MAY or OPTIONAL keyword.

**Machine-Testable Requirements** are those with which compliance can be verified using an automated test suite and appropriate scripting or testing software.

**Rules** are Machine-Testable Requirements that are written in a Machine-Readable language and can be processed by a Rules Engine. They are expressed in a structured rules language as specified by the Governance Framework.

**Human-Auditable Requirements** are those with which compliance can only be verified by an audit of people, processes, and procedures.

**Policies** are Human-Auditable Requirements written using standard conformance terminology. The Policies used in the Governance Framework will use the standard terminology detailed in RFC 2119 keywords. Note that all RFC 2119 keywords have weight from an auditing perspective. An implementer MUST explain why a SHOULD or RECOMMENDED requirement was not implemented and SHOULD explain why a MAY requirement was implemented.

**Specifications** are documents containing any combination of Machine-Testable Requirements and Human-Auditable Requirements needed to produce technical interoperability.

## Purpose

The purpose of the OpenClimate Ecosystem Rules is to describe the rules/policies/procedures for verifiable credential exchanges involving Scope 1 GHG Emissions with the OpenClimate Portal. The purpose of the rules is to enable all actors to understand agreed upon standards, terminology and processes that allow the OpenClimate Ecosystem to operate. This will help determine a governing framework and operating model for a global ecosystem that identifies how credentials can be issued, held, and verified by our natural resources business, so that any downstream purchaser, certifier, or financer can be assured of the attested good practices of the BC Industry (in the scope of this pilot) to prove sustainable resourcing.  

## Localization

1)	The official language of the Open Earth GHG Ecosystem Governance Framework SHALL be American English.
2)	The Governance Framework Website SHALL include introductory remakes in the languages of the G20 countries.
3)	For situations in which Open Climate Ecosystem Governance Framework MAY be needed in another language, Open Earth will consider this on a case-by-case basis. 

## Governing Authority 

1)	The OpenEarth Foundation (OEF) as Governing Authority is responsible for the OpenClimate Ecosystem Governance Framework.
2)	The contact information for OpenEarth is:
	- martin@openearth.org
	- joaquin@openearth.org
__________________________
Recommendations for the governing parties in the governance model are contained in the Governance Requirements. This is a controlled document. 


## Purpose

The purpose of the Open Climate Ecosystem Governance Framework is to describe the rules/policies/procedures for Scope 1 GHG Emissions verifiable credential exchanges with the OpenClimate Portal. OpenClimate will be using a subset of content from the Scope 1 GHG Emissions credential called Emissions Presentation Definition v1.0.

## Scope 

The following entities are stakeholders in the Trust Community 

**The OpenEarth - TOIP Rules** apply to all parties who become members of the Open Earth Ecosystem.
 
**OpenEarth**- OpenEarth Foundation is the Governing Authority, a research and deployment non-profit using cutting edge digital technologies and multi-stakeholder collaborations to advance open-source platforms that help increase planetary resilience.

**Credential Issuer**– An organization accredited by OpenEarth to validate company, facility and their related GHG emissions information and register new companies and reference data which are sent to OpenClimate for inclusion in the OpenClimate Independent Emission Inventory.

**Legal Entity** – A legal person or structure that is organized under the laws of any jurisdiction that meet the eligibility criteria for registering for a Scope 1 GHG Emissions credential

**OpenClimate Credential User** – Any user of an OpenClimate GHG credential in any applicable use case. 

**Out of scope** for the OpenClimate Ecosystem Governance Framework are GHG measurements managed by other entities and documents. Although OpenClimate encourages other governance frameworks to make use of the Open Climate Ecosystem Governance Framework for Scope 1 GHG Emissions Credentials, these governance frameworks also are out of scope. 

### Key Roles:
* Validator: The Credential Issuer that validates that the data shared by the company is true according to a certain methodology.
* Company: The legal entity that is reporting their climate data

## Key Processes:

**User and Company Invitation**
-	An organization will be created in the OpenClimate platform 
	-	If the organization already exists in the platform, this step can be skipped
-	A user will be invited into the platform by providing their name and email
-	The user will receive an email to the registered email address with a link that will lead to the issuance of two credentials, a Verified Email Credential and a Verified Employee Credential, to be stored in their Personal Wallet.

**User Identity & Authentication**
-	Will be made up of two separate Verified Credentials (VC) for Personal Identity, a Verified Email Credential and a Verified Employee Credential
	-	The Verified Email Credential MUST be issued by the OpenClimate platform upon invitation of the user
	-	The Verified Employee Credential SHOULD be issued by the Company to which the user belongs, but MAY be issued by the OpenClimate platform
-	Identity VC Storage Location MUST take place on a Personal Wallet with a secure connection. 
-	Verifiable Credential Proof will be requested by the OpenClimate platform for authentication and the proof will be provided by the Personal Digital wallet

**Business Registration & Authentication**

-	Will be made up of a Verified Credential (VC) for BC Business Registration. 
-	VC Storage Location SHOULD take place on a Business Wallet with a secure connection
	-	Some organizations MAY use a Personal Wallet for Emissions VC storage but it is not recommended
-	Verifiable Credential Proof will be requested by the OpenClimate platform and the proof will be provided by the Business or Personal Wallet, linking the Business Wallet to the user

**Emissions presentation**

-	Will be made up of a Verified Credential (VC) for Scope 1 GHG Emissions
-	VC Storage Location SHOULD take place on a Business Wallet with a secure connection that has been already registered in the OpenClimate platform as a user’s linked Business Wallet
	-	Some organizations MAY use a Personal Wallet for Business Registration VC storage but it is not recommended
-	Verifiable Credential Proof MAY be requested by the OpenClimate platform and the proof will be provided by the Business or Personal Wallet
-	Verifiable Credential Proof MAY be presented directly by the Company by sharing a proof presentation to the OpenClimate platform following the correct proof presentation definition

## Key Trust Decisions

#### Trusted Issuers
The list of Trusted Issuers of the Scope 1 GHG emissions credential is available at <openearth.org/openclimate/trusted-registry>

| Issuer Name | Wallet DID | Ledger |
|-------------|------------|--------|
| BC Gov Climate Action Secretariat| dskhfk23948 | BCovrin |

#### Supporting Governance Frameworks
The OpenClimate Platform adheres to the following Governance Frameworks to ensure interoperability:
* Layer 3 - [Scope 1 GHG Emissions Credential Governance Framework (Primary Document)](https://github.com/bcgov/bc-vcpedia/wiki/Scope-1-GHG-Emissions-Credential-Governance-Framework-(Primary-Document))
* Layer 2 - [BC Gov Traction Agency Governance Framework](https://github.com/bcgov/bc-vcpedia/wiki/(Traction-Showcase-Layer-2)-BC-Gov-Traction-Agency-Governance-Framework)


## Objectives 

The objectives of the OpenClimate Ecosystem Governance Framework for a Scope 1 GHG Emissions credential is the following: 
Account for Scope 1 GHG Emissions Credentials 
-	Open Climate wants to account for Corporate GHG emissions
-	Expand the capacity for Corporate GHG emissions-accounting through cryptographically verifiable credentials at the facility or point-source level
-	Enable companies to attract investors and signal low carbon products through GHG emissions standard reporting
Incentivize Compliance
-	The OpenClimate Ecosystem Governance Framework seeks to incentivize compliance with GHG accounting rules amongst participants.
-	Enable a chain of trust through legal entities, credential issuers and governance authorities.
-	Support further levels of delegated identifiers and associated Verifiable Credentials to provide scalability.
-	Enable an integrated nested accounting framework through the use of facility-level emissions reporting so as to  include corporate data in subnational and national emissions inventories
Enable new Use Cases
-	The establishment of an OpenClimate Governance Framework will incentivize wider adoption of decentralized trust technology for verifiable credentials

## Principles 

1)	Sustainability
2)	Stewardship 
3)	Public good
4)	Transparency
5)	Citizen Engagement
6)	Digital Sovereignty
7)	Security
8)	Confidence
9)	Synchronization

## Privacy 

* Privacy and Minimal Disclosure: The OpenClimate Ecosystem SHALL protect digital data to ensure the privacy of OpenClimate Ecosystem Members.
* The OpenClimate Ecosystem SHALL require members explicit intention or consent for each use of digital data. 
* The OpenClimate Ecosystem Members SHALL enjoy all the data rights and protections provided under relevant legislation and policy. 
* OpenClimate Ecosystem Members SHALL fulfill all the data duties and obligations as required by the Governance Framework.



## Business Requirement - OpenClimate and The Company 

OpenClimate will have a connection with the Business Wallet of Copper Mountain Mine to facilitate interaction from a business requirement side. There is currently a business agreement between Copper Mountain Mine and OpenClimate. The Business wallet will facilitate a secure connection and is a “registered business”.  

Verifiable Credentials process will involve the following:

(a)	Scope 1 GHG Emissions credential 

Reported GHG emissions data is included in a Layer 3 ToIP governance document outlining standards and business requirements related to CAS (Climate Action Secretariat) acting as an issuer for GHG Emissions Credentials Data. 


## Technical Requirements

1)	User/system of business wallet initiates presentation proposal with emissions data
2)	OC wallet auto accepts the proposal
3)	OC reads attributable data and loads into database

A mechanism will be developed to save the raw data and check the validity

1.	All GHG Emissions Credentials MUST maintain an entity status of Active and a GHG registration status other than Lapsed, Retired, Duplicate, Annulled or Merged
2.	All issuers of credentials MUST verify that a Holder’s Automatic Identifier is controlled by the holder
3.	All _______ MUST have executed a GHG Emission issuer Qualification Agreement 
4.	All ________ MUST successfully complete a GHG Emission issuer Qualification 
5.	Open Earth MUST publish the GHG Ecosystem Governance Framework on OpenEarth.org and follow the policies in the revision section for all revisions of the OpenClimate Ecosystem Governance Framework 
6.	GHG Emissions Credentials MUST be revocable following the policies specified in the OpenClimate Ecosystem Governance Framework 
7.	MUST ensure that third parties comply with the Open Earth Governance Frameworks when providing ____________services to a __________. 


### Presentation definitions
DIF-compliant Presentation Definitions following (https://identity.foundation/presentation-exchange/) that are used are registered at the following locations:
1.  Educational Achievement Query v1.0, where id is: ______ and the definition is at:
1.  ______ , where the id is: ______ and the definition is at:

#### Example Proof Request
```
   proof_req = {
        "requested_attributes": [
            {
                "name": "degree",
                "restrictions": [{"cred_def_id": faber.cred_def_id}],
            },
            {
                "name": "date",
                "restrictions": [{"cred_def_id": faber.cred_def_id}],
            },
        ],
        "requested_predicates": [
            {
                "name": "age",
                "p_type": ">",
                "p_value": 18,
                "restrictions": [{"cred_def_id": faber.cred_def_id}],
            }
        ],
    }
```



## Changing the OpenClimate Rules

The **OpenClimate Ecosystem Rules** can change for the following reasons:
1.	Changes in laws or regulations
2.	Changes proposed by the existing community
3.	Changes proposed by potential new community members.


## Revisions

1.	Any OpenClimate Ecosystem Member MUST be able to propose a change to, or translation of the OpenClimate Ecosystem Rules by contacting the administrative authority  e.g. by emailing martin@openearth.org
2.	Any participant in the OpenClimate Ecosystem SHOULD be able to propose a change to the OpenClimate Rules by contacting the administering authority  e.g. by emailing martin@openearth.org
3.	The administering authority MUST implement a change process as specified in the Governance Requirements controlled document.
4.	The OpenClimate Ecosystem Rules SHOULD be reviewed if an issuer of Scope 1 GHG Emissions Credentials Data requests it
5.	The OpenClimate Ecosystem Rules MUST be reviewed if anything in the OpenClimate Rules is found to be in breach of the law within the legal jurisdiction of the USA or Canada.
6.	The OpenClimate Ecosystem Rules MUST be reviewed if there are changes to the legal jurisdiction in which the administering authority or the OpenClimate platform operator are registered.
7.	The OpenClimate Ecosystem Rules MUST be reviewed if there are changes in applicable law, for example data protection law, within the legal jurisdiction of the Open Earth Rules which is the USA.
8.	The OpenClimate Ecosystem Rules MUST be reviewed if there are substantive changes to the functionality of the OpenClimate platform.
9.	The OpenClimate Ecosystem Rules MUST be reviewed if the actions or transactions, especially those associated with risk decisions or the control of digital data, which are currently carried out by human actors are replaced with automation and decision-making by non-human actors.  For example, machine-readable governance.
10.	The OpenClimate Ecosystem Rules MUST be reviewed if the OpenClimate objectives change (adding, changing and/or removing them).
11.	The OpenClimate Ecosystem Rules MUST be reviewed as a result of a risk assessment process, a new threat or high risk or significant harm is identified which arises from the implementation of the Open Earth Rules or which can be treated through a revision of the Open Earth Rules.
12.	The OpenClimate Ecosystem Rules MUST be reviewed a change proposed by an OpenClimate Ecosystem member successfully completes the change process as defined by the administering authority.
13.	Revisions of the OpenClimate Rules SHOULD be compliant with the ToIP Metamodel and MAY be reviewed by members of the Trust over IP Foundation.
14.	If any revisions to the rules are made, they should be communicated to participants, users and trusted issuers and the governing authority of the Scope 1 GHG Governance Framework authority through email.

## Extensions

1)	OpenEarth welcomes other Governance Frameworks to leverage the OpenClimate Ecosystem Framework but does not anticipate the need at this time to specify formal extensions from other external Governance Frameworks that will leverage the OpenClimate Ecosystem Governance Framework
2)	The Open Climate Ecosystem Framework is extended by the following internal governance framework: OpenEarth Identifier Governance Frameworks and GHG Emissions Credential Governance Frameworks. 


## Inclusion, Equitability and Accessibility Requirements


OpenEarth must design the OpenClimate Ecosystem to be able to make credentials available to any legal entity issued a GHG Credential in the OpenClimate Ecosystem.

## Schedule of Controlled Documents

DID URLS for all documents will be published with the Draft of the Ecosystem Governance Framework
This Draft can be viewed at ________________________-

**Glossary**
Verifiable Scope 2 and 3 GHG Open Climate Ecosystem Governance Framework Glossary is a document that lists all defined terms have been referenced in the Open Earth Documents

**Risk Assessment**
Verifiable GHG Emissions Credentials Risk Assessment is a ______________ that assesses certain risk categories regarding the operation of the Open Climate Ecosystem and Infrastructure

**Trust Assurance and Certification**
Verifiable GHG Emissions Credentials Governance Framework Trust Assurance is a spreadsheet that focuses on MUST statements within other GHG Emissions Governance documents and specifies the services/processes that will be used to evaluate compliance with these statements

**Governance Requirements**
1. The governance of the Open Earth GHG Ecosystem can be found 
at __________________________
2. The Memorandum of Understanding between the Open Earth and______________
can be found at ________________
3. The Charter of the _______________can be downloaded as a ____________
4. The Statutes of Open Earth can be downloaded as a pdf, ______________
5. The By-laws of ____________ can be downloaded as a pdf,____________
6. Open Climate has a Board of independent directors, 
7. The Open Climate standard, ISO 17442-1:2020 Financial services – Legal entity identifier (LEI) –
Part 1: Assignment can be found here: ___________________

