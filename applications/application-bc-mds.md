---
layout: default
title: BC Mines Act Permit
parent: Applications
---

# BC Mines Digital Services Governance Framework - DRAFT
# 1. Primary Document

## 1.1 Introduction

This document articulates the governance framework for BC Mines Digital Services as a participant of the open gloabal community that exchanges verifiable credentials [(layer four application of the Trust Over IP Foundation (ToIP) model)](https://www.trustoverip.org/wp-content/toip-model/)

The development of this documentation follows the governance framework created by the [Trust over IP Foundation (ToIP)](https://trustoverip.org/) [Governance Metamodel Specification](https://trustoverip.org/wp-content/uploads/ToIP-Governance-Metamodel-Specification-V1.0-2022-12-21.pdf) created by the [Governance Stack Working Group (GSWG)](https://wiki.trustoverip.org/display/HOME/Governance+Stack+Working+Group).

These materials are made available under and are subject to the [Creative Commons Attribution 4.0 International license](http://creativecommons.org/licenses/by/4.0/legalcode).

THESE MATERIALS ARE PROVIDED “AS IS.” The Trust Over IP Foundation, established as the Joint Development Foundation Projects, LLC, Trust Over IP Foundation Series ("ToIP"), and its members and contributors (each of ToIP, its members and contributors, a "ToIP Party") expressly disclaim any warranties (express, implied, or otherwise), including implied warranties of merchantability, non-infringement, fitness for a particular purpose, or title, related to the materials. The entire risk as to implementing or otherwise using the materials is assumed by the implementer and user. 

IN NO EVENT WILL ANY ToIP PARTY BE LIABLE TO ANY OTHER PARTY FOR LOST PROFITS OR ANY FORM OF INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY CHARACTER FROM ANY CAUSES OF ACTION OF ANY KIND WITH RESPECT TO THESE MATERIALS, ANY DELIVERABLE OR THE ToIP GOVERNING AGREEMENT, WHETHER BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, AND WHETHER OR NOT THE OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

***Acknowledgements***

This governance framework includes structural elements from the Trust over IP Metamodel that were developed by Governance Stack Working Group of the Trust over IP Foundation, the eSSIF Lab Glossary and Mental Models, were contributed to the Trust Over IP Foundation under the CC BY-SA 4.0 license.  There have also been contributions from the Concepts & Terminology Working Group at ToIP, the Human Experience Working Group at ToIP and the Ecosystem Foundry Working Group at ToIP, the work of the Governance Framework Working Group at Sovrin Foundation is also acknowledged in providing support.
## 1.2. Terminology and Notation

Please reference [Glossary - General Trust Over IP Terms](https://trustoverip.github.io/toip/glossary).

**Requirements** include any combination of Machine-Testable Requirements and Human-Auditable Requirements. Unless otherwise stated, all Requirements MUST be expressed as defined in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

- Mandates are Requirements that use a MUST, MUST NOT, SHALL, SHALL NOT or REQUIRED keyword.
- Recommendations are Requirements that use a SHOULD, SHOULD NOT, or RECOMMENDED keyword.
- Options are Requirements that use a MAY or OPTIONAL keyword.

**Machine-Testable Requirements** are those with which compliance can be verified using an automated test suite and appropriate scripting or testing software.

**Rules** are Machine-Testable Requirements that are written in a Machine-Readable language and can be processed by a Rules Engine. They are expressed in a structured rules language as specified by the Governance Framework.

**Human-Auditable Requirements** are those with which compliance can only be verified by an audit of people, processes, and procedures.

**Policies** are Human-Auditable Requirements written using standard conformance terminology. The Policies used in the Governance Framework will use the standard terminology detailed in RFC 2119 keywords. Note that all RFC 2119 keywords have weight from an auditing perspective. An implementer MUST explain why a SHOULD or RECOMMENDED requirement was not implemented and SHOULD explain why a MAY requirement was implemented.

**Specifications** are documents containing any combination of Machine-Testable Requirements and Human-Auditable Requirements needed to produce technical interoperability.

## 1.3. Localization

The standard language for this governing framework (GF) is English.

## 1.4 Governing Authority

[The Mines Digital Services (MDS)](https://digital.gov.bc.ca/learning/case-studies/monitoring-mining-operations-in-bc/) is the governing authority responsible for this Governance Framework (GF). 

## 1.5. Administering Authority

[Energy and Mines Digital Trust (EMDT)](https://digital.gov.bc.ca/case-studies/emdt) is the Administering Authority on behalf of The Mines Digital Services (MDS) during the pilot phase of development.

The contact information for EMDT is:
* 	**Name:** Kyle Robinson 
* 	**Title:** Senior Strategic Advisor, Digital Trust Ecosystems
* 	**Organization:** Briartech Consulting Inc.
* 	**Email:** [kyle.robinson@briartech.ca](mailto:kyle.robinson@briartech.ca)

## 1.6 Purpose 

The purpose of this governance framework is to describe the rules/policies/procedures for verifiable credential exchanges involving Mines Digital Services (MDS) with the open global community. The purpose of the rules is to enable all actors to understand agreed upon standards, terminology and processes that allow the community to interact with MDS in a trusted manner. This will help determine a governing framework and operating model for a global ecosystem that identifies how credentials can be issued, held, and verified.

## 1.7 Scope

[The Mines Digital Services (MDS)](https://digital.gov.bc.ca/learning/case-studies/monitoring-mining-operations-in-bc/) is a participant in an open ecosystem and the focus of this framework is to describe the process MDS uses for digital exchanges on Indy networks.

## 1.8 Objectives 

_This section states the high-level outcomes desired by the trust community through its adoption of the GF._
1. SHOULD specify tangible, achievable results (e.g. SMART criteria and Fit-for-Purpose criteria).
2. MUST only contain outcomes over which the GF has the authority and mechanisms to achieve within its
scope.
3. MUST be consistent with the principles of the GF (below).

TBD

## 1.9 Principles 

[The BC Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/ethics-standards-of-conduct/corporate-values) has one overarching corporate value, __Integrity__, and 6 core corporate values: Curiosity, Service, Passion, Teamwork, Accountability, and Courage. __Integrity__ is placed above all the other values as a quality that affirms the [Standards of Conduct for the BC Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/ethics-standards-of-conduct/standards-of-conduct).

## 1.10 General Requirements

When mining operators wish to obtain a BC Mines Act Permit in BC, they must adhere to the [Mines Act Permiting Process](https://mines.nrs.gov.bc.ca/authorizations). The Mines Act permitting process includes on-site activities, such as the management of water quality, waste and metal leaching and acid rock drainage at the mine, as well as, geotechnical design and reclamation and closure planning. 

## 1.11. Revisions

Version 1.0. 

## 1.12. Extensions

There are no extensions to this Governance Framework.  

## 1.13. Schedule of Controlled Documents

TBD

# 2. Controlled Documents

## 2.1. Glossary
[ToIP Core Glossary](https://trustoverip.github.io/toip/glossary)

[BC Mines Act Definitions](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01#section1)

*  **Credential Holders**: These are the mining operators within BC
*  **Mines Act Permit Holder**: A person and/or a company in whose name a Mines Act Permit Document is recorded in the division records
*  **Major Mines**: Moderate- to large- scale mineral and coal mining operations, including sand and gravel pits, quarries, and placer mines.
* 	**Coordinated Authorizations** are referred by the Chief Permitting Officer (CPO) to manage projects that require multiple permits – for example, a Mines Act permit to construct and operate an outfall and an EMA permit to discharge from it. There are three different routes for a project to come into the coordinated 
authorizations process:
      1. Any new mineral or coal mine project, whether or not reviewable under the Environmental 
Assessment Act (EAA);
      2. A mine project that is an extension, expansion, or re-start requiring multiple 
authorizations;
      3. Any project that the CPO determines would benefit from the coordinated authorizations 
process due to its complexity.
* 	**Major Mines Office (MMO)** All construction and operations permit applications for coal and mineral mines are managed by the Ministry's Major Mines Office (MMO) and must be submitted through the MMO’s intake email permrecl@gov.bc.ca.

## 2.2. Risk Assessment
TBD

## 2.3. Trust Assurance and Certification
TBD

## 2.4. Governance Requirements
The Mines Digital Services (MDS) updates and manages this credential governance framework.

Legislation and regulations govern the disposition, administration and management of mines in BC. These can be found in [The Mines Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96293_01).

- **[BC Mine Information](https://mines.nrs.gov.bc.ca/)**
- **[BC Mine Authorizations](https://mines.nrs.gov.bc.ca/authorizations)**

## 2.5. Business Requirements

## 2.5.1. Establishment of Connection

1. The interested mining company MUST send a request to MDS to receive a digital credential. 
2. Once the mining company has been verified, MDS MUST issue an invitation to connect via email to initiate the exchange of information. 
3. The receiving mining company MUST use the invitation provided by MDS in order to establish a secure connection.

## 2.5.2. Mines Act Operating Permit

1. Using the established connection, Envirochem MUST receive a credential request from the client.
2. Continuing from step 1, the client MUST provide all of the following attributes in the credential request as outlined in the 


## 2.6. Technical Requirements (Credential)
*MUST have an Hyperledger Aries compatible business wallet.*

## 2.7. Information Trust Requirements

The [Freedom of Information and Protection of Privacy Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96165_00) sets out the access and privacy rights of individuals as they relate to the public sector in British Columbia.

## 2.8. Inclusion, Equitability, and Accessibility Requirements

The [Accessible British Columbia Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/21019) informs [**AccessibleBC**](https://www2.gov.bc.ca/gov/content/governments/about-the-bc-government/accessibility/legislation/accessiblebc)

The [Diversity & Inclusion Strategy for the BC Public Service](https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/diversity-inclusion/diversity-inclusion-strategy) outlines the committments of BC govenment in supporting inclusion, equitability and access throughout the province.

The [Declaration on the Rights of Indigenous Peoples Act (Declaration Act)](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/19044) establishes the United Nations Declaration on the Rights of Indigenous Peoples (UN Declaration) as BC’s framework for reconciliation that respects the human rights of Indigenous Peoples.

## 2.9. Legal Agreements
TBD

# End of Document
