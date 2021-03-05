//------------------------------------------------------------------------------
// <auto-generated />
//
// This file was automatically generated by SWIG (http://www.swig.org).
// Version 4.0.0
//
// Do not make changes to this file unless you know what you are doing--modify
// the SWIG interface file instead.
//------------------------------------------------------------------------------

namespace mscl {

public class RTKDeviceStatusFlags : Bitfield {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;

  internal RTKDeviceStatusFlags(global::System.IntPtr cPtr, bool cMemoryOwn) : base(msclPINVOKE.RTKDeviceStatusFlags_SWIGUpcast(cPtr), cMemoryOwn) {
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(RTKDeviceStatusFlags obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  protected override void Dispose(bool disposing) {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_RTKDeviceStatusFlags(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
      base.Dispose(disposing);
    }
  }

  public RTKDeviceStatusFlags() : this(msclPINVOKE.new_RTKDeviceStatusFlags__SWIG_0(), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public RTKDeviceStatusFlags(uint flags) : this(msclPINVOKE.new_RTKDeviceStatusFlags__SWIG_1(flags), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public RTKDeviceStatusFlags.ControllerState controllerState() {
    RTKDeviceStatusFlags.ControllerState ret = (RTKDeviceStatusFlags.ControllerState)msclPINVOKE.RTKDeviceStatusFlags_controllerState__SWIG_0(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void controllerState(RTKDeviceStatusFlags.ControllerState state) {
    msclPINVOKE.RTKDeviceStatusFlags_controllerState__SWIG_1(swigCPtr, (int)state);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public RTKDeviceStatusFlags.PlatformState platformState() {
    RTKDeviceStatusFlags.PlatformState ret = (RTKDeviceStatusFlags.PlatformState)msclPINVOKE.RTKDeviceStatusFlags_platformState__SWIG_0(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void platformState(RTKDeviceStatusFlags.PlatformState state) {
    msclPINVOKE.RTKDeviceStatusFlags_platformState__SWIG_1(swigCPtr, (int)state);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public RTKDeviceStatusFlags.ControllerStatusCode controllerStatusCode() {
    RTKDeviceStatusFlags.ControllerStatusCode ret = (RTKDeviceStatusFlags.ControllerStatusCode)msclPINVOKE.RTKDeviceStatusFlags_controllerStatusCode__SWIG_0(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void controllerStatusCode(RTKDeviceStatusFlags.ControllerStatusCode status) {
    msclPINVOKE.RTKDeviceStatusFlags_controllerStatusCode__SWIG_1(swigCPtr, (int)status);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public RTKDeviceStatusFlags.PlatformStatusCode platformStatusCode() {
    RTKDeviceStatusFlags.PlatformStatusCode ret = (RTKDeviceStatusFlags.PlatformStatusCode)msclPINVOKE.RTKDeviceStatusFlags_platformStatusCode__SWIG_0(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void platformStatusCode(RTKDeviceStatusFlags.PlatformStatusCode status) {
    msclPINVOKE.RTKDeviceStatusFlags_platformStatusCode__SWIG_1(swigCPtr, (int)status);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public RTKDeviceStatusFlags.ResetReason resetReason() {
    RTKDeviceStatusFlags.ResetReason ret = (RTKDeviceStatusFlags.ResetReason)msclPINVOKE.RTKDeviceStatusFlags_resetReason__SWIG_0(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void resetReason(RTKDeviceStatusFlags.ResetReason reason) {
    msclPINVOKE.RTKDeviceStatusFlags_resetReason__SWIG_1(swigCPtr, (int)reason);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public byte signalQuality() {
    byte ret = msclPINVOKE.RTKDeviceStatusFlags_signalQuality__SWIG_0(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void signalQuality(byte quality) {
    msclPINVOKE.RTKDeviceStatusFlags_signalQuality__SWIG_1(swigCPtr, quality);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public static readonly uint CONTROLLER_STATE = msclPINVOKE.RTKDeviceStatusFlags_CONTROLLER_STATE_get();
  public static readonly uint PLATFORM_STATE = msclPINVOKE.RTKDeviceStatusFlags_PLATFORM_STATE_get();
  public static readonly uint CONTROLLER_STATUS_CODE = msclPINVOKE.RTKDeviceStatusFlags_CONTROLLER_STATUS_CODE_get();
  public static readonly uint PLATFORM_STATUS_CODE = msclPINVOKE.RTKDeviceStatusFlags_PLATFORM_STATUS_CODE_get();
  public static readonly uint RESET_REASON = msclPINVOKE.RTKDeviceStatusFlags_RESET_REASON_get();
  public static readonly uint SIGNAL_QUALITY = msclPINVOKE.RTKDeviceStatusFlags_SIGNAL_QUALITY_get();
  public enum ControllerState {
    IDLE = 0x00,
    ACTIVE = 0x04
  }

  public enum PlatformState {
    MODEM_OFF = 0x00,
    MODEM_POWERING_ON = 0x01,
    MODEM_CONFIGURE = 0x02,
    MODEM_POWERING_DOWN = 0x03,
    MODEM_READY = 0x04,
    MODEM_CONNECTING = 0x05,
    MODEM_DISCONNECTING = 0x06,
    MODEM_CONNECTED = 0x07,
    SERVICE_CONNECTING = 0x08,
    SERVICE_CONNECTION_FAILED = 0x09,
    SERVICE_CONNECTION_CANCELED = 0x0A,
    SERVICE_DISCONNECTING = 0x0B,
    SERVICE_CONNECTED = 0x0C,
    PLATFORM_ERROR = 0x0D,
    RESET_MODEM = 0x0E
  }

  public enum ControllerStatusCode {
    CONTROLLER_OK = 0x00,
    WAITING_NMEA = 0x01,
    RTK_TIMEOUT = 0x02,
    RTK_UNAVAILABLE = 0x03,
    CONFIG_INVALID = 0x07
  }

  public enum PlatformStatusCode {
    PLATFORM_OK = 0x00,
    RTK_CONNECTION_DROPPED = 0x04,
    CELL_CONNECTION_DROPPED = 0x06,
    MODEM_ERROR = 0x07
  }

  public enum ResetReason {
    POWER_ON = 0x00,
    UNKNOWN = 0x01,
    SOFT_RESET = 0x02,
    HARDWARE_ERROR_RESET = 0x03
  }

}

}
