from pydantic import BaseModel


class HCPBase(BaseModel):
    name: str
    specialty: str | None = None
    hospital: str | None = None
    city: str | None = None


class HCPCreate(HCPBase):
    pass


class HCPResponse(HCPBase):
    id: int

    model_config = {
        "from_attributes": True
    }