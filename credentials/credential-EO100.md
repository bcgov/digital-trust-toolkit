
# EO100™ Certification Statement Credential - Draft

## 1. Primary Document
### 1.1. Introduction
This document articulates the certification statement credential for the [EO100™ Standard for Responsible Energy Development](https://energystandards.org/responsible-energy-development/) and the [EO100™ Technical Supplement: Onshore Natural Gas and Light Oil Production](https://energystandards.org/eo100-technical-supplement-onshore-natural-gas-and-light-oil-production/) from Equitable Origin. 

The development of this documentation follows the governance framework created by the [Trust over IP Foundation (ToIP)](https://trustoverip.org/) [Governance Metamodel Specification](https://trustoverip.org/wp-content/uploads/ToIP-Governance-Metamodel-Specification-V1.0-2022-12-21.pdf) created by the [Governance Stack Working Group (GSWG)](https://wiki.trustoverip.org/display/HOME/Governance+Stack+Working+Group).

These materials are made available under and are subject to the [Creative Commons Attribution 4.0 International license](http://creativecommons.org/licenses/by/4.0/legalcode).

THESE MATERIALS ARE PROVIDED “AS IS.” The Trust Over IP Foundation, established as the Joint Development Foundation Projects, LLC, Trust Over IP Foundation Series ("ToIP"), and its members and contributors (each of ToIP, its members and contributors, a "ToIP Party") expressly disclaim any warranties (express, implied, or otherwise), including implied warranties of merchantability, non-infringement, fitness for a particular purpose, or title, related to the materials. The entire risk as to implementing or otherwise using the materials is assumed by the implementer and user. 

IN NO EVENT WILL ANY ToIP PARTY BE LIABLE TO ANY OTHER PARTY FOR LOST PROFITS OR ANY FORM OF INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY CHARACTER FROM ANY CAUSES OF ACTION OF ANY KIND WITH RESPECT TO THESE MATERIALS, ANY DELIVERABLE OR THE ToIP GOVERNING AGREEMENT, WHETHER BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, AND WHETHER OR NOT THE OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

***Acknowledgements***

This governance framework includes structural elements from the Trust over IP Metamodel that were developed by Governance Stack Working Group of the Trust over IP Foundation, the eSSIF Lab Glossary and Mental Models, were contributed to the Trust Over IP Foundation under the CC BY-SA 4.0 license.  There have also been contributions from the Concepts & Terminology Working Group at ToIP, the Human Experience Working Group at ToIP and the Ecosystem Foundry Working Group at ToIP, the work of the Governance Framework Working Group at Sovrin Foundation is also acknowledged in providing support.

### 1.2. Terminology and Notation

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

### 1.3. Localization

The standard language for this governing framework (GF) is English.
 
### 1.4. Governing Authority

[Equitable Origin](https://www.equitableorigin.org/) is the Governing Authority responsible for this Governance Framework (GF).

The contact information for PwC during the pilot phase of development is:
* 	**Name:** Soledad Mills
* 	**Title:** Chief Executive Officer
* 	**Organization:** Equitable Origin
* 	**Email:** [smills@equitableorigin.org](mailto:smills@equitableorigin.org)

### 1.5. Administering Authority

[Energy and Mines Digital Trust (EMDT)](https://digital.gov.bc.ca/case-studies/emdt) is the Administering Authority on behalf of PricewaterhouseCoopers (PwC) during the pilot phase of development.

The contact information for EMDT is:
* 	**Name:** Kyle Robinson 
* 	**Title:** Senior Strategic Advisor, Digital Trust Ecosystems
* 	**Organization:** Briartech Consulting Inc.
* 	**Email:** [kyle.robinson@briartech.ca](mailto:kyle.robinson@briartech.ca)

### 1.6. Purpose
The purpose of this governing framework (GF) is to provide the parameters specific to the creation of the EO100™ Certification Statement Credential.

### 1.7. Scope

This governance framework applies to the certification statement credential for the EO100™ certification from Equitable Origin.

### 1.8. Objectives

_This section states the high-level outcomes desired by the trust community through its adoption of the GF._

1. SHOULD specify tangible, achievable results (e.g. SMART criteria and Fit-for-Purpose criteria).
2. MUST only contain outcomes over which the GF has the authority and mechanisms to achieve within its
scope.
3. MUST be consistent with the principles of the GF (below).

### 1.9. Principles

_TBD - These are standard principals from ToIP, to be edited by Equitable Origin_


### 1.11. Revisions

Version 1.0

_TBD - How and when Equitable Origin would change governance framework_

## 1.12. Extensions

There are no extensions to this Governance Framework.

## 2. Controlled Documents

### 2.6. Technical Requirements
Technical requirement consists of the following schema definition and credential implementation.

##### 2.6.1. Schema Definition

__Schema Name:__ eo100.statement

__Schema Version:__ 1.0

This schema definition follows the AnonCreds specification (https://anoncreds-wg.github.io/anoncreds-spec/)

Attribute | Format | Rules | Notes
--- | --- | --- | ---
certificate_issuer | String | Not NULL | name field, Equitable Origin
certificate_number | String | Not NULL | alpha-numeric id generated by Equitable Origin
operator | String | Not NULL | name field, name of the company
ucp_name | String | Not NULL | unit of certifiable production, name field similar to site or facility name
ucp_location_city | String | Not NULL | name field
ucp_location_province | String | Not NULL | name field
ucp_location_country | String | Not NULL | name field
certification_date | String | Not NULL | day, month, year
expiration_date | String | Not NULL | day, month, year
certification_standard | String | Not NULL | name field, specify standard "EO100™ Standard for Responsible Energy Development" and/or "EO100™ Technical Supplement: Onshore Natural Gas and Light Oil Production"
assessor_name | String | Not NULL | name field, company name of verifier

##### 2.6.2. Credential Implementation
Ledger | SCHEMA DEF | CRED DEF | Notes	
--- | --- | --- | ---
BCovrin Test | TBD | --- | ---

## End of Document
