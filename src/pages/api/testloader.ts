// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import AK from '../../exampleData/AK.geo.json'; 
import AL from '../../exampleData/AL.geo.json';
import AR from '../../exampleData/AR.geo.json';
import AZ from '../../exampleData/AZ.geo.json';
import CA from '../../exampleData/CA.geo.json';
import CO from '../../exampleData/CO.geo.json';
import CT from '../../exampleData/CT.geo.json';
import DC from '../../exampleData/DC.geo.json';
import DE from '../../exampleData/DE.geo.json';
import FL from '../../exampleData/FL.geo.json';
import GA from '../../exampleData/GA.geo.json';
import HI from '../../exampleData/HI.geo.json';
import IA from '../../exampleData/IA.geo.json';
import ID from '../../exampleData/ID.geo.json';
import IL from '../../exampleData/IL.geo.json';
import IN from '../../exampleData/IN.geo.json';
import KS from '../../exampleData/KS.geo.json';
import KY from '../../exampleData/KY.geo.json';
import LA from '../../exampleData/LA.geo.json';
import MA from '../../exampleData/MA.geo.json';
import MD from '../../exampleData/MD.geo.json';
import ME from '../../exampleData/ME.geo.json';
import MI from '../../exampleData/MI.geo.json';
import MN from '../../exampleData/MN.geo.json';
import MO from '../../exampleData/MO.geo.json';
import MS from '../../exampleData/MS.geo.json';
import MT from '../../exampleData/MT.geo.json';
import NC from '../../exampleData/NC.geo.json';
import ND from '../../exampleData/ND.geo.json';
import NE from '../../exampleData/NE.geo.json';
import NH from '../../exampleData/NH.geo.json';
import NJ from '../../exampleData/NJ.geo.json';
import NM from '../../exampleData/NM.geo.json';
import NV from '../../exampleData/NV.geo.json';
import NY from '../../exampleData/NY.geo.json';
import OH from '../../exampleData/OH.geo.json';
import OK from '../../exampleData/OK.geo.json';
import OR from '../../exampleData/OR.geo.json';
import PA from '../../exampleData/PA.geo.json';
import PR from '../../exampleData/PR.geo.json';
import RI from '../../exampleData/RI.geo.json';
import SC from '../../exampleData/SC.geo.json';
import SD from '../../exampleData/SD.geo.json';
import TN from '../../exampleData/TN.geo.json';
import TX from '../../exampleData/TX.geo.json';
import UT from '../../exampleData/UT.geo.json';
import VA from '../../exampleData/VA.geo.json';
import VT from '../../exampleData/VT.geo.json';
import WA from '../../exampleData/WA.geo.json';
import WI from '../../exampleData/WI.geo.json';
import WV from '../../exampleData/WV.geo.json';
import WY from '../../exampleData/WY.geo.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  var statesJSON = { 
    "type" : "FeatureCollection",
    "features": [... AK.features, ... AL.features, ... AR.features, ... AZ.features, ... CA.features, ... CO.features, ... CT.features, ... DC.features, ... DE.features, ... FL.features, ... GA.features, ... HI.features, ... IA.features, ... ID.features, ... IL.features, ... IN.features, ... KS.features, ... KY.features, ... LA.features, ... MA.features, ... MD.features, ... MI.features, ... ME.features, ... MN.features, ... MO.features, ... MS.features, ... MT.features, ... NC.features, ... ND.features, ... NE.features, ... NH.features, ... NJ.features, ... NM.features, ... NV.features, ... NY.features, ... OH.features, ... OK.features, ... OR.features, ... PA.features, ... PR.features, ... RI.features, ... SC.features, ... SD.features, ... TN.features, ... TX.features, ... UT.features, ... VA.features, ... VT.features, ... WA.features, ... WI.features, ... WV.features, ... WY.features]
}
  var combinedStates = {AK, AL, AR, AZ, CA, CO, CT, DC, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, PR, RI, SC, SD, TN, TX, UT, VA, VT, WA, WI, WV, WY}
  res.status(200).json(statesJSON)
}