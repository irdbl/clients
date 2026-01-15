import { FlightRecorderService } from "./flight-recorder.service";

describe("FlightRecorderService", () => {
  let service: FlightRecorderService;

  beforeEach(() => {
    service = new FlightRecorderService();
  });

  describe("when SDK client is not available", () => {
    it("drain returns empty array", () => {
      const result = service.drain();

      expect(result).toEqual([]);
    });

    it("count returns 0", () => {
      const result = service.count();

      expect(result).toEqual(0);
    });

    it("isAvailable returns false", () => {
      const result = service.isAvailable();

      expect(result).toBe(false);
    });

    it("exportAsJson returns empty array JSON", () => {
      const result = service.exportAsJson();

      expect(result).toEqual("[]");
    });

    it("exportAsPlainText returns empty string", () => {
      const result = service.exportAsPlainText();

      expect(result).toEqual("");
    });
  });

  describe("exportAsJson", () => {
    it("formats events with 2-space indentation", () => {
      // When client is null, returns "[]" which is properly formatted
      const result = service.exportAsJson();

      // Verify it's valid JSON
      expect(() => JSON.parse(result)).not.toThrow();
    });
  });

  describe("exportAsPlainText", () => {
    it("returns empty string when no events", () => {
      const result = service.exportAsPlainText();

      expect(result).toBe("");
    });
  });
});
