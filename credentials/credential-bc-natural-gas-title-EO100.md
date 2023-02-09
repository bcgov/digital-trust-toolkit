
# DRAFT - EO100™ Certification Statement Credential

## Introduction
This document articulates the credential for the EO100™ certification from Equitable Origin. 


This governance document has been developed in accordance with the ToIP’s Governance Metamodel Specification created by the Governance Stack Working Group (GSWG) as the template for this framework.

## Terminology and Notation

[Glossary - General Trust Over IP Terms](https://trustoverip.github.io/toip/glossary)

## Localization

1.	The standard language for this governing framework is American English.
 
## Governing Authority

Equitable Origin

## Purpose

The Verification Statement credential must be issued by a third-party verification body. The structure for the credential contains all information needed to fulfil this Verification Statement. These systems and governance will allow a more trustworthy ecosystem. This will be built under this governance framework. The purpose of this governance framework to outline all rules associated with governance, issuance, verification, and revocation of this Verification Statement credential.  

## Scope

This governance framework only covers the credential for the EO100™ certification from Equitable Origin.

## Schema Definition

This schema definition follows the AnonCreds specification (https://anoncreds-wg.github.io/anoncreds-spec/)

Attribute | Format | Rules | Notes
--- | --- | --- | ---
verification_body_name | String | Not NULL | 
verification_body_address | String | Not NULL |
accreditation | String | Not NULL | 
accreditation_status | String | Not NULL | 
lead_verifier_name | String | Not NULL | 
lead_verifier_email | String | Not NULL | 
lead_verifier_phone | String | Not NULL | 
independent_peer_reviewer_name | String | Not NULL | 
independent_peer_reviewer_email | String | Not NULL | 
independent_peer_reviewer_phone | String | Not NULL | 
name_of_facility | String | Not NULL | 
facility_type | String | Not NULL | 
facility_address | String | Not NULL | 


## Credential Implementation
Ledger | SCHEMA DEF | CRED DEF | Notes	
--- | --- | --- | ---
BCovrin Test | TBD | --- | ---

