import { MiPermit, RequestTypes } from "../src";

describe("mipermit", () => {
  let client: MiPermit;

  beforeEach(() => {
    client = MiPermit.create({
      accessToken: "some-access-token",
    });

    client.http = mockAxios();
  });

  it("should set an access token", () => {
    const accessToken = "some-token";

    client.setAccessToken(accessToken);

    expect(client.options.accessToken).toBe(accessToken);
  });

  it("should get active permits", async () => {
    const response = {
      Items: null,
      StayItems: [],
      ItemTypes: [],
      ActivatablePermits: [],
      ItemTemplates: null,
      ResultCode: "",
      Result: "",
      ResultDescription: "",
    };

    client.http = mockAxios({
      [RequestTypes.GET_ACCOUNT_ACTIVE_PERMITS]: response,
    });

    const actual = await client.getActivePermits();

    expect(actual).toEqual(response);

    const body = client.createBody({
      L: client.options.accessToken!,
      T: RequestTypes.GET_ACCOUNT_ACTIVE_PERMITS,
    });

    expect(client.http.post).toHaveBeenCalledWith(
      "Device/ConsumerSmartPhone.aspx",
      body,
    );
  });
});

type Responses = Record<RequestTypes.GET_ACCOUNT_ACTIVE_PERMITS, any>;

function mockAxios(responses?: Partial<Responses>): any {
  return {
    post: jest.fn().mockImplementation((url, data) => {
      const type = (data as FormData).get("T") as RequestTypes;

      return Promise.resolve({
        data: responses?.[type],
      });
    }),
  };
}
