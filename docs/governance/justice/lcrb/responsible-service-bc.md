# Responsible Service BC Training Certificate Credential – Credential Documentation

## 1 About this Document
This document describes the Responsible Service BC Training Certificate Credential to help potential verifiers determine whether it is suitable for their needs. The intended audience includes policy analysts, privacy specialists, solution architects, developers, and data architects.

### 1.1 Version History
| Ver. | Date        | Notes       |
|------|-------------|-------------|
| 1.0  | March 06, 2025 | Initial version with updated schema/credential details, corrected attributes, OCA bundles with accurate image and color data, program website enhancements, and updated proof requests from BC Wallet definitions (March 2025). |

## 2 Credential Overview
The Responsible Service BC Training Certificate Credential provides evidence that the credential holder has completed the required training certification for selling or serving liquor or cannabis in British Columbia. Issued by the Liquor and Cannabis Regulation Branch (LCRB), it is intended for individuals working in licensed establishments (e.g., bars, restaurants, retail stores) or hosting special events where liquor is served. The credential ensures compliance with B.C. laws, enhances safety in licensed establishments, and supports industry standards under the *Liquor Control and Licensing Act* (LCLA) and *Cannabis Control and Licensing Act* (CCLA). It encompasses three distinct types: *Serving It Right* (for liquor service), *Selling It Right* (for cannabis sales), and *Special Event Server* (for special events involving liquor), all sharing a common schema. Further resources, including training schedules and FAQs, are available at [Responsible Service BC](https://www.responsibleservicebc.gov.bc.ca/).

- **Credential**: Responsible Service BC Training Certificate (includes *Serving It Right*, *Selling It Right*, *Special Event Server*)
- **Schema**: LCRBSirSes (version 1.0.0)
  - [Schema details](https://candyscan.idlab.org/tx/CANDY_PROD/domain/1098)
- **Issuer**:
  - **Name**: Liquor and Cannabis Regulation Branch (LCRB)
  - **Description**: The LCRB regulates the private retail sale of liquor and non-medical cannabis in British Columbia.
  - **Website**: [https://justice.gov.bc.ca/lcrb/](https://justice.gov.bc.ca/lcrb/)
  - **Contact info**: General inquiries – [Contact Us](https://www.responsibleservicebc.gov.bc.ca/contact-us) for training support

## 3 Governance & Legal
### 3.1 Governing Authority & Administrative Authority
The governing body with authority to issue and revoke the credential is the General Manager (GM) of the Liquor and Cannabis Regulation Branch (LCRB), as defined in:
- Section 60 of the *LCLA*
- Section 184 of the *Liquor Control and Licensing Regulation*
- Sections 113-116 of the *CCLA*
- Section 42.1 of the *Cannabis Licensing Regulation*

The GM may delegate powers in writing to employees or other persons.

- **Contact Information**:
  - **Name**: David Hume
  - **Title**: General Manager and Assistant Deputy Minister
  - **Organization**: Liquor and Cannabis Regulation Branch
  - **Email**: David.Hume@gov.bc.ca

The administrative body delegated operational responsibilities is the LCRB’s Compliance and Enforcement Division.

- **Contact Information**:
  - **Name**: Ian Brown
  - **Title**: Deputy General Manager and Executive Director, Compliance and Enforcement Division
  - **Organization**: Liquor and Cannabis Regulation Branch
  - **Email**: Ian.S.Brown@gov.bc.ca

- **Reference**: [Trust over IP Glossary - Governing Body](https://glossary.trustoverip.org/#term:governing-body) and [Administering Body](https://glossary.trustoverip.org/#term:administering-body)

### 3.2 Legal
#### 3.2.1 For Verifiers
The Province of British Columbia disclaims all liability for harms suffered by parties accepting the credential. Verifiers use it at their own risk and should verify its suitability for their purposes. See the full *Limitation of Liability* statement in the Governance Framework.

#### 3.2.2 For End Users
The Province of British Columbia disclaims all liability for harms suffered by credential holders. End users accept the credential “as is” with no warranties, as outlined in the Governance Framework’s *No Warranty* statement, presented during issuance.

## 4 Credential Data, Issuance and Changes
### 4.1 Data Source(s)
Credential data is sourced from We Know Training, the LCRB’s designated training service provider, detailed at [Responsible Service BC](https://www.responsibleservicebc.gov.bc.ca/). Accuracy is ensured through training completion verification, validated by the LCRB under the General Manager’s authority.

#### 4.1.1 Data Updates
Credential data remains static post-issuance. Updates to a holder’s status (e.g., name change) require revocation and re-issuance.

### 4.2 Issuance
The credential is issued to individuals who complete training via We Know Training:
1. The provider verifies training completion and submits records to the LCRB.
2. The LCRB issues the credential (*Serving It Right*, *Selling It Right*, or *Special Event Server*) using the holder’s authenticated identity from training records.
3. It is delivered to a standards-compliant digital wallet supporting AnonCreds.

### 4.3 Revocation
Revocation occurs if:
- The holder no longer meets certification requirements (e.g., regulatory changes).
- The credential was issued erroneously.
- Training certification is invalidated.

Revocation is executed via the AnonCreds revocation registry on the CANDY Prod ledger.

## 5 Credential Definition
### 5.1 Subject
The subject is an individual trained to sell or serve liquor or cannabis in B.C. Verifiers can trust the holder is the subject due to the authenticated issuance process tied to training records.

### 5.2 Attributes
The credential includes these attributes, consistent across all three types:

| Display Name          | Description                  | Attribute              | Data Type | Format    | Rules         | Examples         | Notes            |
|-----------------------|------------------------------|------------------------|-----------|-----------|---------------|------------------|------------------|
| Given Name(s)         | Holder’s given name(s)       | given_names            | String    |           | Not NULL      | "Jane"           |                  |
| Family Name           | Holder’s family name         | family_name            | String    |           | Not NULL      | "Smith"          |                  |
| Email                 | Holder’s email address       | email                  | String    |           | Not NULL      | "jane.smith@example.com" | Used for contact/identity |
| Date Completed        | Date training was completed  | date_completed_dateint | Integer   | YYYYMMDD  | Not NULL      | "20230101"       | Stored as date integer |
| Expiry Date           | Date certification expires   | expires_dateint        | Integer   | YYYYMMDD  | Not NULL      | "20280101"       | 5 years from completion |
| Certification Number  | Unique certificate ID        | certification_number   | String    | 7-digit   | Not NULL      | "1234567"        | Tracks individuals in B.C. |
| Date Created          | Date credential was created  | date_created_dateint   | Integer   | YYYYMMDD  | Not NULL      | "20230102"       | Issuance date |

## 6 Implementations
### 6.1 Technical Format
The credential is issued in the AnonCreds format.

### 6.2 Issuer List
| Environment       | Issuer DID                        |
|-------------------|-----------------------------------|
| Production        | 4WW6792ksq62UroZyfd6nQ           |

### 6.3 Schema
| Environment       | Ledger                            | Schema ID                         |
|-------------------|-----------------------------------|-----------------------------------|
| Production        | [CANDY Prod](https://candyscan.idlab.org) | 4WW6792ksq62UroZyfd6nQ:2:LCRBSirSes:1.0.0 |

### 6.4 Credential
| Environment       | Ledger                            | Credential Definition ID          | OCA Bundle            |
|-------------------|-----------------------------------|-----------------------------------|-----------------------|
| Production        | [CANDY Prod](https://candyscan.idlab.org) | 4WW6792ksq62UroZyfd6nQ:3:CL:1098:ServingItRight | bcgov-digital-trust-LCRB-serving-it-right |
| Production        | [CANDY Prod](https://candyscan.idlab.org) | 4WW6792ksq62UroZyfd6nQ:3:CL:1098:SellingItRight | bcgov-digital-trust-LCRB-selling-it-right |
| Production        | [CANDY Prod](https://candyscan.idlab.org) | 4WW6792ksq62UroZyfd6nQ:3:CL:1098:SpecialEventServer | bcgov-digital-trust-LCRB-special-event-server |

### 6.5 OCA Bundle Additional Information
#### Serving It Right
- **Logo Image**: [https://github.com/bcgov/aries-oca-bundles/raw/main/OCABundles/schema/bcgov-digital-trust/LCRB/serving-it-right/assets/logo.png](https://github.com/bcgov/aries-oca-bundles/raw/main/OCABundles/schema/bcgov-digital-trust/LCRB/serving-it-right/assets/logo.png)
- **Background Image Slice**: [https://www.responsibleservicebc.gov.bc.ca/files/static/bc_wallet_vc_lcrb_image_slice_serving.jpg](https://www.responsibleservicebc.gov.bc.ca/files/static/bc_wallet_vc_lcrb_image_slice_serving.jpg)
- **Full Background Image**: [https://www.responsibleservicebc.gov.bc.ca/files/static/bc_wallet_vc_lcrb_background_image_serving.jpg](https://www.responsibleservicebc.gov.bc.ca/files/static/bc_wallet_vc_lcrb_background_image_serving.jpg)
- **Primary Color**: "#003366" 
- **Secondary Color**: "#FCBA19" 
- **Main Display Attribute**: "given_names"
- **Secondary Display Attribute**: "family_name"
- **Issuance Date Field**: "date_created_dateint"
- **Expiry Date Field**: "expires_dateint"

#### Selling It Right
- **Logo Image**: [https://github.com/bcgov/aries-oca-bundles/raw/main/OCABundles/schema/bcgov-digital-trust/LCRB/selling-it-right/assets/logo.png](https://github.com/bcgov/aries-oca-bundles/raw/main/OCABundles/schema/bcgov-digital-trust/LCRB/selling-it-right/assets/logo.png)
- **Background Image Slice**: [https://www.responsibleservicebc.gov.bc.ca/files/static/bc_wallet_vc_lcrb_image_slice_selling.jpg](https://www.responsibleservicebc.gov.bc.ca/files/static/bc_wallet_vc_lcrb_image_slice_selling.jpg)
- **Full Background Image**: [https://www.responsibleservicebc.gov.bc.ca/files/static/bc_wallet_vc_lcrb_background_image_selling.jpg](https://www.responsibleservicebc.gov.bc.ca/files/static/bc_wallet_vc_lcrb_background_image_selling.jpg)
- **Primary Color**: "#003366" 
- **Secondary Color**: "#FCBA19" 
- **Main Display Attribute**: "given_names"
- **Secondary Display Attribute**: "family_name"
- **Issuance Date Field**: "date_created_dateint"
- **Expiry Date Field**: "expires_dateint"

#### Special Event Server
- **Logo Image**: [https://github.com/bcgov/aries-oca-bundles/raw/main/OCABundles/schema/bcgov-digital-trust/LCRB/special-event-server/assets/logo.png](https://github.com/bcgov/aries-oca-bundles/raw/main/OCABundles/schema/bcgov-digital-trust/LCRB/special-event-server/assets/logo.png)
- **Background Image Slice**: [https://www.responsibleservicebc.gov.bc.ca/files/static/bc_wallet_vc_lcrb_image_slice_special_event.jpg](https://www.responsibleservicebc.gov.bc.ca/files/static/bc_wallet_vc_lcrb_image_slice_special_event.jpg)
- **Full Background Image**: [https://www.responsibleservicebc.gov.bc.ca/files/static/bc_wallet_vc_lcrb_background_image_special_event.jpg](https://www.responsibleservicebc.gov.bc.ca/files/static/bc_wallet_vc_lcrb_background_image_special_event.jpg)
- **Primary Color**: "#003366" 
- **Secondary Color**: "#FCBA19" 
- **Main Display Attribute**: "given_names"
- **Secondary Display Attribute**: "family_name"
- **Issuance Date Field**: "date_created_dateint"
- **Expiry Date Field**: "expires_dateint"

## 7 Example Proof Requests
**Proof Request: Verify Serving It Right Certification**
- **Attributes Requested**: 
  - From `Person` schema: `given_names`, `family_name`, `picture`
  - From `LCRBSirSes` schema: `given_names`, `family_name`, `certification_number`, `expires_dateint`
- **Explanation**: A verifier (e.g., a bar owner) requests proof that an employee holds a valid *Serving It Right* credential with identity verification. The response includes the individual’s full name and photo from a `Person` credential for identity confirmation, alongside the certification number to uniquely identify the training credential and the expiry date to ensure it remains valid for liquor service in British Columbia.
