NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Commands/GetDeviceInfo.h",{1570:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains information retrieved from an Inertial GetDeviceInfo command.</div></div>",1572:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1572\" class=\"NDPrototype NoParameterForm\">Version fwVersion</div><div class=\"TTSummary\">The firmware Version.</div></div>",1573:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1573\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> modelName</div><div class=\"TTSummary\">The model name.</div></div>",1574:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1574\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> modelNumber</div><div class=\"TTSummary\">The model number.</div></div>",1575:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1575\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serialNumber</div><div class=\"TTSummary\">The serial number.</div></div>",1576:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1576\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> lotNumber</div><div class=\"TTSummary\">The lot number.</div></div>",1577:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1577\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> deviceOptions</div><div class=\"TTSummary\">The device options.</div></div>",1578:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1578\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GetDeviceInfo</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial GetDeviceInfo command</div></div>",1584:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1584\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand()</div><div class=\"TTSummary\">Builds the command packet</div></div>",1585:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1585\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the GetDeviceInfo command</div></div>",1587:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1587\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GetDeviceInfo Response object</div></div>",1588:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1588\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match_data(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Attempts to match an MipDataField to the expected data field response.</div></div>",1589:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1589\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipDeviceInfo parseResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Parses a successfully matched response for the GetDeviceInfo command.</div></div>"});