# BC Governemnt Agency Service Provisional Governance Framework

## Authors

- John Kirby, IBM, [@JohnKirbyIBM](https://github.com/JohnKirbyIBM)
- Andrei Saikouski, IBM [@andreisaikouski](https://github.com/andreisaikouski)
- David Stirling, IBM [@dstirling01](https://github.com/dstirling01)

## Contributors

- Kyle Robinson [@krobinsonca](https://github.com/krobinsonca)
- John Ouilette, IBM
- Damien Joly
- Peter Watkins
- Charles Macpherson
- Jason Syrotuck
- John Jordan
- Oliver Jones
- Lucas Oneil

## Revision History

Version | Date | Revisions | Author
--- | ---- | --------- | ----
0.1 | May 27, 2022 | Initial page creation and set up | John Kirby, IBM
0.2 | May 30, 2022 | Draft document | John Kirby & Andrei Saikouski, IBM
0.3 | July 12, 2022 | Final Draft of Provisional Governance Framework | Andrei Saikouski, David Stirling, and John Kirby, IBM

# Primary Document

## Introduction

This governance framework document has been developed in accordance with the [Trust Over IP’s Governance Metamodel Specification](https://trustoverip.org/permalink/ToIP-Governance-Metamodel-Specification-V1.0-2021-12-21.pdf).

## Purpose

The Purpose of the Provisional Governance Framework, referred to as 'GF' in this document, is to establish technology, interoperability, security, privacy, usability, accessibility, and data protection standards that establish trust in the governance, operation and use of the BC Enterprise Digital Trust Agency (referred to as "Agency" in this document).


## Objectives

The objectives of the Provisional Governance Framework for the Agency are as follows:
* Equip the Governing Authority with a Minimum Viable Governance Framework that supports a service for establishing trusted and enduring digital relationships between services and their users, and will iteratively mature as the service gains more adoption and that allows for agile responses to maturing standards and evolving business requirements.
* Establish technical and organizational measures that ensure trust and operational integrity between British Columbia tenant users and the operators of the Agency.
* Build trust between the service and stakeholders, by making transparent the governance that enables the secure and private operation of the Agency.
* Formalize the relationships and responsibilities between the Governing Authority and the Operations Team in the design, build, governance, and operation of the Agency and Provisional Governance Framework.
* Support initial prioritized implementations of the Agency and assess the viability and relevancy of the framework with real-world use-cases.

## Guiding Principles
The Agency Entity (as per [member hierarchy](#member-hierarchy)) will be led by [British Columbia's Digital Principles](https://digital.gov.bc.ca/resources/digital-principles), the [ToIP Design Principles](https://trustoverip.org/permalink/Design-Principles-for-the-ToIP-Stack-V1.0-2022-11-17.pdf), and [ToIP Principles of SSI](https://trustoverip.org/wp-content/uploads/2021/10/ToIP-Principles-of-SSI.pdf). These principles guide the day-to-day work of BC Public Servants and contractors who are designing, developing, and delivering digital services.

By design, the Agency service is intended for use by government and public-sector entities and is not intended for use by private individuals. 

## Scope

The GF covers the following components:

### Governed Roles

The governed roles in the Agency ecosystem are as follows:
* [Governing Authority](#member-management-policies-governing-authority)
* [Tenant User](#member-management-policies-tenant-user) ("Tenants")
* [Agency Operation](#member-management-policies-Agency-Operator) ("Operations Team")
* [Innkeeper](#member-management-policies-innkeeper)

### Other Relevant Stakeholders

At this time, no other relevant stakeholders of this trust community have been identified.

### Technical Standards

Item | Details
----- | ----------
Technical Protocol | The open-source technical protocols and standards that Agency is built are as follows: <br/>• Aries Cloud Agent Python (ACAPY) 0.7X <br/>• W3C DIDCore V1.0
Supported DID Method | The Supported DID Methods are as follows: <br/>• DID:BCovrin <br/>• DID:Sovrin *(current)* <br/>• DID:INDY:CANDY: *(Roadmap)* <br/>• DID:INDY: *(Roadmap)*
Credential Formats | The supported Credential Formats are as follows: <br/>• Hyperledger Indy AnonCreds V1.0 <br/>• W3C JSON-LD *(Roadmap)*
Envelope Protocols | The Envelope Protocols that Agency supports are as follows: <br/>• DIDComm V1
Transport Protocols | The Transport Protocols that Agency supports are as follows: <br/>• HTTPS
Interoperability Profiles | The Interoperability Profiles that Agency supports are as follows: <br/>• DIDComm V1 <br/>• Aries Interop Profile 1.0 (The Agency Operator is transitioning from AIP 1 to AIP 2 at this time) <br/>• Aries Interop Profile 2.0

### Out of Scope

The following roles, solutions, and entities are out of scope from this governance framework:
* The BC Mobile Edge Wallet solution
* The Business Partner Agent solution
* Participation in open-source communities
* Registering credential schemas, credential definitions, or decentralized identifiers on other solutions
* Qualifying and registering Issuers
* Endorsement of transactions on any ledger or solution
* Governing multiple instances of the Agency

## Member Management and Voting Policies

### Member Hierarchy

The following chart is an overview of the member hierarchy for the Agency

<p align="center">
<img src='https://github.com/bcgov/bc-vcpedia/blob/wiki-assets/images/BC%20Enterprise%20Digital%20Trust%20Agency%20Member%20Hierarchy%20%20.png' height='700'>
</p>

### Acting Members

The following entities, boards, or individuals act in the role of provisional Governing Authority or Agency Operations Team, and Innkeeper. 

| Member Type | Acting Member | Contact Information |
| ----- | ------------- | ------------- |
| Provisional Governing Authority| Jillian Carruthers | jillian.carruthers@gov.bc.ca |
| Provisional Agency Operations Team | Traction Team | |
| Innkeeper | Lucas O'Neil | lucas.oneil@gov.bc.ca |

### Member Management Policies: Governing Authority

**Definition**

The Governing Authority is the entity (board or individual) responsible for defining, administrating, and governing the Agency.

**General Requirements**

The Governing Authority is responsible for:
* Reviewing and approving new versions of the Governance Framework.
* Confirming the identity and authority of entities prior to being on-boarded to the Agency.
* Approving new organizations that can be on-boarded into the Agency.
* Approving the delegation of the Innkeeper role to individuals.
* Provide approval for the removal of a Tenant User from the Agency as needed and/or determined.
* Delegating a successor to act as Governing Authority in the event there is a change in the Governing Authority.

**On-boarding Requirements**

This Governance Framework does not define on-boarding requirements for the Governing Authority. 

**Maintenance Requirements**

This Governance Framework does not define maintenance requirements for the Governing Authority.

**Off-boarding Requirements**

When the Governing Authority changes from one entity to another, the incumbent Governing Authority MUST delegate the role of Governing Authority to a newly responsible entity. The [Acting Members](#acting-members) section of the Governance Framework MUST be updated to reflect the current entity, board, or individual that acts as the new Governing Authority.

### Member Management Policies: Tenant User

**Definition**

A Tenant User is a BC Government entity that uses the service to issue, hold, and verify verifiable credentials.

**General Requirements**

Tenants are any British Columbia entity that has been approved by the Governing Authority and on-boarded to the Agency. Tenants can issue, hold, and verify, verifiable credentials through the service.

At this time, the Agency is made available free of charge to Tenants. As the solution matures, the commercial models MAY be reevaluated.

**Responsibilities**

* Tenants are responsible for securely managing and rotating their Public / Private key pairs, secrets, and any other confidential information.
* Tenants that act as Issuers SHOULD only issue truthful and accurate information to validated credential recipients.
* Tenants that act as Issuers are responsible for the status management of any credentials they issue.
* Tenants SHOULD work to resolve any disputes about the accuracy of credentials within an appropriate time frame.
* If a Tenant plans to transmit or store personal information (PI), sensitive personal information (SPI), or business sensitive information (BSI), they SHOULD report this to the Innkeeper and Operations team who will determine the feasibility of transmitting or storing such data sets and any additional requirements. 
* Prior to releasing an integration with the Agency service, the Tenant MUST complete a Security Threat Risk Assessment and a Privacy Impact Assessment.

**On-boarding Policies**

* BC Entities interested in having Tenants SHOULD discuss the opportunity and requirements with the [Governing Authority](#acting-members).
* Tenants are created by the Innkeeper with direction from the Governing Authority.
* The Innkeeper will issue the Tenant a verifiable credential that asserts their identity and any credential issuance authorities they have.

**Maintenance Policies**

* Tenants are REQUIRED to report any change in authority that affects the type of credentials they can issue or verify. The Innkeeper is responsible for maintaining any changes to a Tenant's account. 

**Off-boarding Policies**

Tenants have the unilateral right to opt out of the use of the Agency service. An authorized representative from the Tenant MUST communicate their decision to opt out of the Agency Service to the Governing Authority.

The Governing Authority holds the right to off-board a Tenant from the Agency service if it has been determined that the Tenant is not adhering to the policies in the Governance Framework or any applicable terms of use.

* If a Tenant makes the decision to no longer use the Agency, they will be offboarded by the Innkeeper.
* In the scenario that the Tenant wishes to export their data from the Agency, they will coordinate this activity with the Innkeeper.

### Member Management Policies: Agency Operator

**Definition**

The Agency Operator is responsible for the building, hosting, operating, and supporting the Agency as a managed technology service.

**General Requirements**

The Agency Operator may delegate its responsibilities to additional responsible team members, referred to as Operations Team Members. 

The responsibilities of the Agency Operator are as follows:
* Architecture, development, security, privacy, compliance, and performance of the Agency service.
* Maintain and operate production instance of the Agency in accordance with the Agency Operator Policies and the British Columbia government's data security and compliance requirements.
* Maintain and analyze the security of the production instance of the Agency.
* Management and resolution of L1, L1.5, L2, and L3 support incidents in accordance with SLAs.
* Maintaining role-based access control (RBAC) policies and permissions for Operations Team Members and Innkeepers following the direction of the Governing Authority. 
* Adhere to the [Agency Operator Policies](#agency-operator-policies).

**On-boarding Requirements**

* Operations Team Members MUST be actively employed or contracted with the British Columbia government
* Operations Team Members MUST have completed all the required training, machine security, and on-boarding tasks required by their employer’s existing on-boarding policies.

**Maintenance Requirements**

Operations Team Members MUST adhere to all the required training, machine security, and on-boarding policies required by their employer’s existing security, privacy, and access policies.

**Off-boarding Requirements**

The following policies MUST be adhered to when an Operations Team Member is off-boarded:
* The individual’s privileges and user accounts MUST be revoked from all systems used in the development and operation of the Agency.
* The individual MUST confirm they have deleted all confidential information and code assets for the Agency from their machine.

### Member Management Policies: Innkeeper

**Definition**

The Innkeeper Role within Agency that supports tenant integrations and service on-boarding.

**General Requirements**

An Innkeeper is a user-based role within the Operations Team that can onboard approved entities to the Agency service. Innkeepers are members of the [Operations Team](#operations-team) and manage the on-boarding, administration, off-boarding processes for all Tenants.

The responsibilities of an Innkeeper are as follows:
* MUST execute the on-boarding and configuration activities for new entities and users to the Agency.
* MUST administrate Tenants on the Agency in accordance with direction from the Governing Authority and Tenant requirements.
* MUST execute off-boarding activities of entities from the Agency and the export of any requested data.
* MUST provide authentication keys to Tenants.
* MUST confirm the types of data Tenants plan to transmit or store and if that information is considered personal information (PI), sensitive personal information (SPI), or business-sensitive information (BSI). 
* MUST maintain a list of entities with the authority to issue credentials in the Agency.
* SHOULD issue verifiable credentials to Tenants that assert their identity and authority to issue specific credential types.

**On-boarding Requirements**

The role of Innkeeper can be delegated to an individual by the Agency Operator per the direction of the Governing Authority.

**Maintenance Requirements**

Innkeepers MUST remain actively staffed with the Agency Operator and in compliance with any on-boarding requirements set by their employer and this framework.

Innkeepers MUST adhere to the policies set by the [Agency Operator](#member-management-policies-agency-operator). 

**Off-boarding Requirements**

The Governing Authority maintains the right to demote Innkeepers at any time and Innkeepers MUST be off-boarded if they are no longer staffed on the Operations Team.

### Voting Methodology

The following decisions MUST be made by the Governing Authority. The Governing Authority will leverage its existing consensus mechanisms to decide on issues.

| Topic | Threshold |
| -------- | -------- |
| Approve the on-boarding of new Tenants. | Leverage existing consensus mechanism. |
| Publish revisions to the Provisional Governance Framework. | Leverage existing consensus mechanism. |
| Approve the delegation of the Innkeeper role to an individual. | Leverage existing consensus mechanism. |

## Technical Policies

### Agency Operator Policies

The following policies are to be adhered to by the Agency Operator. 

* Tenant integrations with the Agency MUST undergo a Security Threat Risk Assessment prior to any development.
* All Agency APIs MUST require authorization.
* The Agency Operator MUST have approval from the Governing Authority prior to promoting an Operations Team Member to the role of Innkeeper.
* The Innkeeper MUST have approval from Governing Authority prior to onboarding Tenants to the Agency service.
* The Innkeeper MUST confirm with Tenants if the Agency SHOULD store transaction data and what the data security and residency requirements are for that data set.
* When a Tenant is off-boarded, the Innkeeper MUST validate if the Tenant requires an export of their data.
* When a Tenant is off-boarded, the Innkeeper MUST remove access to all users associated with the Tenant.
* All data MUST be hard-deleted from an off-boarded Tenant's account after all data associated with the Tenant has been exported.
* The Agency SHOULD maintain data residency within Canada subject to and MUST operate in accordance with all applicable policies, laws, and regulations.
* The Agency SHOULD use robust, enterprise-grade server hardware and SHOULD maintain high availability.
* All information in transit and at rest SHOULD be encrypted. 

## Supporting Governance Frameworks

The Agency adheres to the following Governance Frameworks to ensure technical interoperability between systems:
* Layer 1 - [Sovrin](https://sovrin.org/library/sovrin-governance-framework/)
* Layer 1 - [CANdy](https://github.com/bcgov/bc-vcpedia/wiki/(Layer-1)-CANdy-Utility-Provisional-Governance-Framework)
* Layer 2 - British Columbia Endorser Framework (*to be developed*)

## Localization

This section covers the policies governing languages and translations for the GF, denoted by the [IETF BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) language tag to identify languages.

### Official languages

The standard language for this governance framework is American English. 

### Production of Translations

Not applicable in this provisional Governance Framework.

## Governing Authority

**Mines Digital Trust team** is the Governing Authority and party legally responsible for developing, maintaining, and implementing the Governance Framework.
> Example: [The British Columbia Government OCIO](https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/central-government-agencies/office-of-the-chief-information-officer) is the Governing Authority and party legally responsible for developing, maintaining, and implementing the Governance Framework.
The contact for petitioners and relying parties of this GF is
* Name ___________
* Title ____________
* Organization ___________
* Email minesdigitaltrust@gov.bc.ca

## Terminology and Notation

Many commonly used terms can be defined in the Trust Over IP documentation:

[Glossary - General Trust over IP Terms](https://trustoverip.github.io/toip/glossary)

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119).

| Term | Definition or Synonym |
| ----- | ------------- |
| BC | British Columbia |
| Tenants | Tenant Users |
| Agency | BC Enterprise Digital Trust Agency |
***
