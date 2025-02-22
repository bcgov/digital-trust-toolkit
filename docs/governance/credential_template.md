# _Name(s) of the Credential(s)_ – Credential Documentation

## 1. About this Document

This document describes the _Name(s) of the Credential(s)_ to help potential verifiers determine whether it is suitable for their needs. The intended audience includes policy analysts, privacy specialists, solution architects, developers, and data architects.

### 1.1 Version History

| Ver. | Date | Notes |
|------|------|-------|
| 1.0  |      |       |

## 2. Credential Overview

_A paragraph summarizing what the Credential(s) is, its purpose, and other notable information._

### 2.1 Credential Details

|              |                                                                |
|-------------------------|---------------------------------------------------------------------------------|
| **Name(s) of the Credential(s):** | _Names(s) of the Credential(s)_                                           |
| **Issuer:**             | _Issuer of the Credential(s)_                                                  |
| **Holders:**            | _Summary of who is eligible to be issued the Credential(s)_                    |
| **Data Source:**        | _Summary of the source(s) of the information in the credential(s)_             |
| **Issuer DID:**         | _DID of the Issuer_                                                            |
| **Format:**             | _Technical format, e.g., AnonCreds, W3C_                                       |
| **Schema:**             | - _Name, version, and address of the Schema_ _Documentation of the Schema, if available_ |
| **Credential Definition:** | - _Name address of the credential definition_                  |
| **Data Registry:**      | _Registry address_                                                             |
| **OCA:**                | _Link to the Overlay Capture Architecture bundle for this credential_          |


### 2.2 Attribute Summary

| Display Name of Attribute | Attribute       | Format |
|---------------------------|-----------------|-----------|
| Given Names               | `given_names`  | string    |
| Family Name               | `family_name`  | string    |
| Date of Birth             | `birthdate_dateint` | integer  |
| ...                       | ...             | ...       |

## 3. Governance & Legal

### 3.1 Governing Authority & Administrative Authority
_The governing body with the authority to issue and revoke the credential(s), including contact information unless an administrative authority is intended to be the contact.  
[https://glossary.trustoverip.org/#term:governing-body]_

_The Ministry of Citizens’ Services, as the Provincial Identity Information Services Provider as defined in section 69.2 of the Freedom of Information and Access to Information Act, is the governing authority for the BC Person credential._

_If different than the Governing Authority, the administrative body that has been delegated operational responsibilities by the governing authority, including contact information.  
[https://glossary.trustoverip.org/#term:administering-body]  _

_Within the Ministry of Citizens’ Services, the Cybersecurity and Digital Trust Branch and the Service BC Division have operational responsibility for the BC Person credential._

### 3.2 Legal

#### 3.2.1 For Verifiers
_A statement – included or linked to – limiting the liability of the issuer (and, if different, the governing and administrative authorities) for any harms suffered by parties that accept the credential._

#### 3.2.2 For End Users
_A statement – included or linked to – limiting the liability of the issuer (and, if different, the governing and administrative authorities) for any harms suffered by parties that are issued the credential. This will often be presented to end users during the issuance process._

_Person credential Terms of Use._

## 4. Credential Data, Issuance, and Changes

### 4.1 Data Source(s)
_Where the data in the credential comes from, and how the issuer ensures that it is correct when collected._

### 4.2 Data Updates
_How and when the Issuer gets updates to the data that goes into the credential. How the credential gets updated should be left for the Revocation section, below._

### 4.3 Issuance
_Describes the process for issuing the credential sufficiently that a prospective verifier will have a good sense of how the issuer ensures that the credential is issued to only the correct party. This should include how the prospective holder is identified and authenticated before being issued a credential. This may reference the Data Source(s) section in explaining how the holder will have a credential with correct data._

_Also: if the credential is issued to individuals or organizations, indicate what type(s) of wallets (e.g., BC Wallet) the credential will be issued to, or if the credential will be issued to any brand or type of wallet._

### 4.4 Revocation
_Describes the circumstances – either specifically or in general – that would cause the issuer to revoke a credential after it has been issued to the Holder._

- The credential will be revoked in the following cases:
  ...
- The credential will be revoked and re-issued in the following cases:
  ...

## 5. Credential Definition

### 5.1 Subject
_The type of entity – e.g., a person, company, title – that is described by the attributes._

_The subject of a Person credential is the individual to whom it was issued, i.e., its holder. See the Credential Assurance section, above, for why a verifier can be confident that the holder of a Person credential is the subject of the credential._

### 5.2 Attributes 
_A list of all the attributes in the credential, with a table describing each attribute. Subheadings and notes may be used to provide information that applies to a group of attributes, e.g., “Name” to describe Given Names and Family Name, “Address” to describe the set of address attributes. Repeat the table for each individual attribute_

| **Field**               | **Description**                                                                                                       |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------|
| **Display Name**         | _Name displayed in the wallet next to the data value (e.g. Birthdate)_                                                          |
| **Description**          | _Describes the data that will be in the attribute (e.g. The individual's documented birth date recorded from valid identification.)_                                                                    |
| **Attribute**            | _Name of attribute in schema or credential  (e.g. `birthdate_dateint`)_                                                                           |
| **Format**               | _How the data is presented (e.g., minimum or maximum characters, how multiple values are delimited, date format is YYYYMMDD)_                    |
| **Rules**                | _Things such as whether the attribute can be blank or not, and how data is handled if the source system data has more characters than the maximum characters defined in the Format_ |
| **Examples**             | _One to three samples of the data that a verifier could find in this attribute (e.g. 19711225, 19711013, 19580816)_                                        |
| **Notes**                | _Additional information about the data that may (or not) be present in the attribute, in particular any “quirks” in the data that could affect a verifier trying to process the data or compare it to other records (including common attributes, such as family_name, in other credentials that may be part of the same proof request but have come from different issuers)._ |

| **Field**               | **Description**                                                                                                       |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------|               
| **Display Name**         |  |
| **Description**          |  |
| **Attribute**            |  |
| **Format**               |  |
| **Rules**                |  |
| **Examples**             |  |
| **Notes**                |  |
