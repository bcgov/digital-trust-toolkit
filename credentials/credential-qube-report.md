# Qube Monthly Report Primary Governance Document

# 1. Primary Document

## 1.1. Introduction

This document articulates the digital credential for the Qube Data Report submitted on a monthly basis. 

The development of this documentation follows the governance framework created by the [Trust over IP Foundation (ToIP)](https://trustoverip.org/) [Governance Metamodel Specification](https://trustoverip.org/wp-content/uploads/ToIP-Governance-Metamodel-Specification-V1.0-2022-12-21.pdf) created by the [Governance Stack Working Group (GSWG)](https://wiki.trustoverip.org/display/HOME/Governance+Stack+Working+Group).

These materials are made available under and are subject to the [Creative Commons Attribution 4.0 International license](http://creativecommons.org/licenses/by/4.0/legalcode).

THESE MATERIALS ARE PROVIDED “AS IS.” The Trust Over IP Foundation, established as the Joint Development Foundation Projects, LLC, Trust Over IP Foundation Series ("ToIP"), and its members and contributors (each of ToIP, its members and contributors, a "ToIP Party") expressly disclaim any warranties (express, implied, or otherwise), including implied warranties of merchantability, non-infringement, fitness for a particular purpose, or title, related to the materials. The entire risk as to implementing or otherwise using the materials is assumed by the implementer and user. 

IN NO EVENT WILL ANY ToIP PARTY BE LIABLE TO ANY OTHER PARTY FOR LOST PROFITS OR ANY FORM OF INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY CHARACTER FROM ANY CAUSES OF ACTION OF ANY KIND WITH RESPECT TO THESE MATERIALS, ANY DELIVERABLE OR THE ToIP GOVERNING AGREEMENT, WHETHER BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, AND WHETHER OR NOT THE OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

***Acknowledgements***

This governance framework includes structural elements from the Trust over IP Metamodel that were developed by Governance Stack Working Group of the Trust over IP Foundation, the eSSIF Lab Glossary and Mental Models, were contributed to the Trust Over IP Foundation under the CC BY-SA 4.0 license.  There have also been contributions from the Concepts & Terminology Working Group at ToIP, the Human Experience Working Group at ToIP and the Ecosystem Foundry Working Group at ToIP, the work of the Governance Framework Working Group at Sovrin Foundation is also acknowledged in providing support.

## 1.2. Terminology and Notation

[Glossary - General Trust Over IP Terms](https://trustoverip.github.io/toip/glossary)

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
 
## 1.4. Governing Authority

Qube is the governing authority and party legally responsible for developing, maintaining and implementing the Governance Framework. This is the only issuing party. 
The contact for petitioners and relying parties of this GF is: 
* 	**Name:** 
* 	**Title:** 
* 	**Organization:**
* 	**Email:**

## 1.5. Administering Authority

[Energy, Mines and Digital Trust (EMDT)](https://digital.gov.bc.ca/case-studies/emdt) is the Administering Authority on behalf of Qube during the pilot phase of development.

## 1.6. Purpose

The purpose of this governance framework is to outline all rules associated with governance and issuance of a Qube Report Credential.  The structure for the credential contains all information needed to fulfill a Qube Report. This credential is issued directly by Qube, which transfers aggregated methane emission volume data based on the time period selected at the site level to the site owner. This system and governance will allow a more trustworthy ecosystem. This will be built under this governance framework. 

## 1.7. Scope

The GF only covers the Qube Report Credential.

## 1.8. Objectives

This GF describes the Qube Report Credential consisting of data elements captured and included within a Qube Report and as defined by Qube API data elements and standards. A list of these can be found on the Qube Platfrom API (V2.0) https://api.qubeiot.com/index.html. The API allows the retrieval of sites, emissions, measurements and wind data. Qube Technologies seeks to apply meaningful greenhouse gas reduction delivered in three stages (detection, measurement and reduction). This trust framework outlines Qube's issuance of a credential based off of Schemas built from Qube Platform API data referenced above. 

## 1.9. Principles
TBD

## 1.10. General Requirements

A Qube Report Credential MUST be issued by Qube. The API referenced in the Schema Definition section of this document allows the retrieval of sites, emissions, measurements and wind data. The API is a REST based API that returns data in JSON format.

## 1.11. Revisions

Current version is draft 1.0

## 1.12. Extensions
There is no extension to this Governance Framework.

## 1.13. Schedule of Controlled Documents

This Governance Framework (GF) covers the monthly Qube Report Credential. 

# 2. Controlled Documents

## 2.1. Glossary
TBD

## 2.2. Risk Assessment
TBD

## 2.3. Trust Assurance and Certification
TBD

## 2.4. Governance Requirements
TBD

## 2.5. Business Requirements
TBD

## 2.6. Technical Requirements

### 2.6.1. Schema Definition

This schema definition follows the AnonCreds specification (https://anoncreds-wg.github.io/anoncreds-spec/)

Attribute | Format | Rules | Notes	
--- | --- | --- | --- |
site_aliases | String | not NULL | Site alias can be defined as the parent company's name or as determined by company.  
site_id | String | not NULL | Site ID is a numerical identifier generated by Qube. 
site_name | String | not NULL | Site name as defined by the company. 
from_time | String | not NULL | Methane emission data that have occurred on or after this timestamp (example 2023-02-08T16:10:51Z).
to_time | String | not NULL | Methane emission data that have occurred on or before this timestamp (example 2023-02-08T16:25:51Z).
equipment | String | not NULL | The identified piece of equipment involved in an emission. If null then a piece of equipment could not be identified as being associated with the emission.
equipment_groups | String | not NULL | The array of objects that pertain to group characteristics (SiteEquipmentGroupModel), exacmple tanks.
group_by_equipment_category | String | not NULL | When set to true the aggregated volumes are additionally grouped by equipment category.
sampling_method | String | not NULL | Optionally specify the sampling method to use when sampling site rates.
sample_period | String | not NULL | Optionally sample the site rates to a specified sampling period.
group_by_period | String | not NULL | The period by which to group the aggregated volumes.
total_volume | String | not NULL | The total volume of methane emissions emitted over the course of the prescribed timeframe.
measurement_types | String | not NULL | The type of measurements that should be returned. 
device_filter | String | not NULL | A definition of what devices to filter by. You can specify either: 1) a site alias|id|name 2) a site alias|id|name with a list of device ids or 3) a list of device installation ids. 
production_data | String | not NULL | under review, number may need to be provided by Xpansive
thresholds_min | String | not NULL | under review, number may need to be provided by Xpansive
thresholds_max | String | not NULL | under review, number may need to be provided by Xpansive

## 2.7. Information Trust Requirements

See [**Qube's Privacy Policy**](https://www.qubeiot.com/privacy-policy)

## 2.8. Inclusion, Equitability, and Accessibility Requirements
TBD

## 2.9. Legal Agreements
TBD

# End of Document
