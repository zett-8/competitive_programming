"""

    Rotate clockwise

"""


def rotate(origin, point, angle):
    rad = (math.pi / 180) * angle

    ox, oy = origin
    px, py = point

    cos = math.cos(rad)
    sin = math.sin(rad)

    qx = ox + cos * (px - ox) + sin * (py - oy)
    qy = oy + cos * (py - oy) - sin * (px - ox)

    return int(qx), int(qy)
