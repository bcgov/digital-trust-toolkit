# BC Petroleum and Natural Gas Title Credential

## Introduction
This document articulates the title credential for natural gas tenure in British Columbia as per the Petroleum and Natural Gas Act.

B.C. Regulation: Petroleum and Natural Gas Act [https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96361_01]


This governance document has been developed in accordance with the ToIP’s Governance Metamodel Specification created by the Governance Stack Working Group (GSWG) as the template for this framework.

## Terminology and Notation

[Glossary - General Trust Over IP Terms](https://trustoverip.github.io/toip/glossary)

## Localization

1.	The standard language for this governing framework is American English.
 
## Governing Authority

Tenure and Resource Stewardship Branch is the governing authority and party legally responsible for developing, maintaining and implementing the Governance Framework. This is the only issuing party. 
The contact for petitioners and relying parties of this GF is:
* 	Name ___________
* 	Title ____________
* 	Organization ___________
* 	Email ____________

## Purpose

This Petroleum and Natural Gas Title Credential must be issued by __________________. The structure for the credential contains all information included in a British Columbia Land Title Document. This title and governance will allow a more trustworthy ecosystem. This will be built under this governance framework. The purpose of this governance framework is to outline all rules associated with governance, issuance, verification, and revocation of a Title Credential.  

## Scope

The GF only covers the Title Credential

## Schema Definition

This schema definition follows the AnonCreds specification (https://anoncreds-wg.github.io/anoncreds-spec/)

Attribute | Format | Rules | Notes	
--- | --- | --- | --- |
Title Number | String  | not NULL | Petroleum and Natural Gas Act Section 50 Leases and Their Rights
Title Type | String | not NULL | Lease, Permit, Drilling Licence, Underground Storage Lease
Date of Issue | String | not NULL| Petroleum and Natural Gas Act Section 47 Term and Renewal
Effective Date | String | not NULL | Petroleum and Natural Gas Act Section 47 Term and Renewal
Term | String | not NULL | Petroleum and Natural Gas Act Section 47 Term and Renewal
Date of Expiry | String | not Null | Effective date plus term Petroleum and Natural Gas Act section 58 (3) outlines Expiration and Continuation of Leases.
Containing | String | not Null | Petroleum and Natural Gas Act section 65 outlines Spacing Areas "For the purposes of this act and the Oil and Gas activities Act, British Columbia, except where insufficient area exists adjacent to its boundaries, is divided into normal spacing areas for petroleum and natural gas wells."
Lessee (s) | String | not Null | Petroleum and Natural Gas Act Section 50 (1) and (2) outlines Leasee (s) and their rights. Section 1 outlines lessee as "a person in whose name a lease is recorded in the divisions records"
Percent Interest | String | not Null | As defined in Petroleum and Natural Gas Act Section 1 outlining the definition of "interest"
Tract | String | not Null | ---
Tract Location | String | not Null | Petroleum and Natural Gas Act Section 1 defines "location means the land described in a permit, licence or lease"
Tract Rights | String | not Null | Petroleum and Natural Gas Act Section 38 describes "Rights Conferred by Permit". this includes "the holder of a permit has the exclusive right to apply under the Oil and Gas Activities Act to do exploratory drilling for petroleum or natural gas or both owned by the government and within the boundaries of the location of the permit"
Tract Notes | String | not Null | ---
Caveats | String | not Null | ---



## Credential Implementation



